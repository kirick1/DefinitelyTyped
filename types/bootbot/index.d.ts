// Type definitions for bootbot 1.0.16
// Project: https://github.com/Charca/bootbot
// Definitions by: Vladyslav Kyrychenko <https://github.com/kirick1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export enum MessagingType {
    RESPONSE = 'RESPONSE',
    UPDATE = 'UPDATE',
    MESSAGE_TAG = 'MESSAGE_TAG'
}
export enum AttachmentType {
    IMAGE = 'image',
    AUDIO = 'audio',
    VIDEO = 'video',
    FILE = 'file',
    TEMPLATE = 'template'
}
export enum ActionType {
    MARK_SEEN = 'mark_seen',
    TYPING_ON = 'typing_on',
    TYPING_OFF = 'typing_off'
}
export enum NotificationType {
    REGULAR = 'REGULAR',
    SILENT_PUSH = 'SILENT_PUSH',
    NO_PUSH = 'NO_PUSH'
}
export enum MessageTag {
    BUSINESS_PRODUCTIVITY = 'BUSINESS_PRODUCTIVITY',
    COMMUNITY_ALERT = 'COMMUNITY_ALERT',
    CONFIRMED_EVENT_REMINDER = 'CONFIRMED_EVENT_REMINDER',
    NON_PROMOTIONAL_SUBSCRIPTION = 'NON_PROMOTIONAL_SUBSCRIPTION',
    PAIRING_UPDATE = 'PAIRING_UPDATE',
    APPLICATION_UPDATE = 'APPLICATION_UPDATE',
    ACCOUNT_UPDATE = 'ACCOUNT_UPDATE',
    PAYMENT_UPDATE = 'PAYMENT_UPDATE',
    PERSONAL_FINANCE_UPDATE = 'PERSONAL_FINANCE_UPDATE',
    SHIPPING_UPDATE = 'SHIPPING_UPDATE',
    RESERVATION_UPDATE = 'RESERVATION_UPDATE',
    ISSUE_RESOLUTION = 'ISSUE_RESOLUTION',
    APPOINTMENT_UPDATE = 'APPOINTMENT_UPDATE',
    GAME_EVENT = 'GAME_EVENT',
    TRANSPORTATION_UPDATE = 'TRANSPORTATION_UPDATE',
    FEATURE_FUNCTIONALITY_UPDATE = 'FEATURE_FUNCTIONALITY_UPDATE',
    TICKET_UPDATE = 'TICKET_UPDATE'
}
export enum ButtonType {
    POSTBACK = 'postback',
    NESTED = 'nested',
    WEB_URL = 'web_url',
    RECEIPT = 'receipt',
    ACCOUNT_LINK = 'account_link',
    ACCOUNT_UNLINK = 'account_unlink',
    ELEMENT_SHARE = 'element_share'
}
export enum ContentType {
    TEXT = 'text',
    EMAIL = 'user_email',
    LOCATION = 'location',
    PHONE_NUMBER = 'user_phone_number'
}
export enum TemplateType {
    BUTTON = 'button',
    TEMPLATE = 'template',
    MEDIA = 'media',
    GENERIC = 'generic',
    LIST = 'list',
    OPEN_GRAPH = 'open_graph',
    AIRLINE_BOARDINGPASS = 'airline_boardingpass',
    AIRLINE_CHECKIN = 'airline_checkin',
    AIRLINE_ITINERARY = 'airline_itinerary',
    AIRLINE_UPDATE = 'airline_update'
}
export enum WebviewHeightRatioType {
    COMPACT = 'compact',
    TALL = 'tall',
    FULL = 'full'
}
export enum WebviewShareButtonType {
    HIDE = 'hide'
}
export enum TopElementStyle {
    COMPACT = 'compact',
    LARGE = 'large'
}
export enum MediaType {
    IMAGE = 'image',
    VIDEO = 'video'
}
export enum SeatType {
    ECONOMY = 'economy',
    COMFORT = 'comfort'
}
export enum AirlineUpdateType {
    DELAY = 'delay',
    GATE_CHANGE = 'gate_change',
    CANCELLATION = 'cancellation'
}
export enum EventType {
    MESSAGE = 'message',
    QUICK_REPLY = 'quick_reply',
    ATTACHMENT = 'attachment',
    POSTBACK = 'postback',
    DELIVERY = 'delivery',
    READ = 'read',
    AUTHENTICATION = 'authentication',
    REFERRAL = 'refferal'
}
export type Event = 'message' | 'quick_reply' | 'attachment' | 'postback' | 'delivery' | 'read' | 'authentication' | 'refferal'


export interface MessagePayload {
    message: {
        text: string
    }
}
export interface LocationPayloadAttachment {
    title: string
    url: string
    type: ContentType
    payload: {
        coordinates: {
            lat: number
            long: number
        }
    }
}
export interface LocationPayload {
    message: {
        attachments: Array<LocationPayloadAttachment>
    }
}
export interface PostbackPayload {
    postback: {
        payload: string
    }
}
export type Payload = MessagePayload | LocationPayload | PostbackPayload | any
export interface FunctionDataParameterType {
    captured: boolean
}
export type FunctionType = (payload: Payload, chat: Chat, data?: FunctionDataParameterType) => any


export interface QuickReplyButton {
    content_type?: ContentType
    title: string
    payload?: string | number
    image_url?: string
}
export interface CallButton {
    type: ContentType.PHONE_NUMBER
    title: string
    payload: string
}
export interface LogInButton {
    type: ButtonType.ACCOUNT_LINK,
    url: string
}
export interface LogOutButton {
    type: ButtonType.ACCOUNT_UNLINK
}
export interface PostbackButton {
    type: ButtonType.POSTBACK
    title: string
    payload: string
}
export interface ShareButton {
    type: ButtonType.ELEMENT_SHARE
    share_contents?: any
}
export interface URLButton {
    type: ButtonType.WEB_URL
    title: string
    url: string
    webview_height_ration?: WebviewHeightRatioType
    messenger_extensions?: boolean
    fallback_url?: string
    webview_share_button?: WebviewShareButtonType
}
export type Button = QuickReplyButton | CallButton | LogInButton | LogOutButton | PostbackButton | ShareButton | URLButton


export interface SendMessageOptions {
    typing?: boolean | number | false
    messagingType?: MessagingType
    notificationType?: NotificationType
    tag?: MessageTag
    onDelivery?: FunctionType
    onRead?: FunctionType
    topElementStyle?: string
}
export interface QuickReply {
    content_type: ContentType
    title: string
    payload: string | number
    image_url?: string
}
export interface Message {
    text: string
    attachment: Attachment
    quick_reply?: Array<QuickReply>
    metadata?: string
}
export interface Recipient {
    id: string
    phone_number?: string
    user_ref?: string
    name?: {
        first_name?: string
        last_name?: string
    }
}
export interface Attachment {
    type: AttachmentType,
    payload: object
}
export interface Element {
    title: string
    subtitle?: string
    image_url?: string
    default_action?: object
    buttons: Array<Button>
}
export interface Profile {
    id?: number
    first_name?: string
    last_name?: string
    profile_pic?: string
    locale?: string
    gender?: string
}
interface Options {
    accessToken: string
    verifyToken: string
    appSecret: string
    webhook?: string
    broadcastEchoes?: boolean
    graphApiVersion?: string
}
export default class BootBot {
    accessToken: string
    verifyToken: string
    appSecret: string
    webhook?: string
    broadcastEchoes?: boolean
    graphApiVersion?: string
    constructor(options: Options)

    start (port?: number): void
    close (): Promise<void>
    on (event: Event | EventType, handler: FunctionType): void

    say (recipientId: Recipient | string, message: string | Message | Array<string | Message>, options?: SendMessageOptions): Promise<any>
    sendTextMessage (recipientId: Recipient | string, text: string, quickReplies: Array<QuickReply | string>, options?: SendMessageOptions): Promise<any>
    sendButtonTemplate (recipientId: Recipient | string, text: string, buttons: Array<Button | string>, options?: SendMessageOptions): Promise<any>
    sendGenericTemplate (recipientId: Recipient | string, elements: Array<Element>, options?: SendMessageOptions): Promise<any>
    sendListTemplate (recipientId: Recipient | string, elements: Array<Element>, buttons: Array<string | Button>, options?: SendMessageOptions): Promise<any>
    sendTemplate (recipientId: Recipient | string, payload: Template, options?: SendMessageOptions): Promise<any>
    sendAttachment (recipientId: Recipient | string, type: AttachmentType, url: string, quickReplies: Array<QuickReply>, options?: SendMessageOptions): Promise<any>
    sendAction (recipientId: Recipient | string, action: ActionType, options?: SendMessageOptions): Promise<any>
    sendMessage (recipientId: Recipient | string, message: Message, options?: SendMessageOptions): Promise<any>
    sendRequest (body: object, endpoint: string, method: string): Promise<any>
    sendThreadRequest (body: object, method: string): Promise<any>
    sendProfileRequest (body: object, method: string): Promise<any>
    sendTypingIndicator (recipientId: Recipient | string, milliseconds: number): Promise<void>
    
    getUserProfile (userId: string): Promise<Profile>
    
    setGreetingText (text: string | Array<object>): Promise<any>
    setGetStartedButton (action: string | FunctionType): Promise<any>
    deleteGetStartedButton (): Promise<any>
    setPersistentMenu (buttons: Array<string | Button>, disableInput?: boolean): Promise<any>
    deletePersistentMenu (): Promise<any>
    
    hear (keywords: string | RegExp | Array<string | RegExp>, callback: FunctionType): BootBot
    module (factory: FunctionType): void
    conversation (recipientId: Recipient | string, factory: FunctionType): Conversation
    handleFacebookData (data: object | any): Promise<any>
}
export class Chat {
    bot: BootBot
    userId: string
    constructor(bot: BootBot, userId: string)

    say (message: string | Message, options?: SendMessageOptions): Promise<any>
    sendTextMessage (text: string, quickReplies: Array<QuickReply | string>, options?: SendMessageOptions): Promise<any>
    sendButtonTemplate (text: string, buttons: Array<string | Button>, options?: SendMessageOptions): Promise<any>
    sendGenericTemplate (cards: Array<Element>, options?: SendMessageOptions): Promise<any>
    sendListTemplate (elements: Array<Element>, buttons: Array<string | Button>, options?: SendMessageOptions): Promise<any>
    sendTemplate (payload: Template, options?: SendMessageOptions): Promise<any>
    sendAttachment (type: AttachmentType, url: string, quickReplies: Array<QuickReply>, options?: SendMessageOptions): Promise<any>
    sendAction (action: ActionType, options?: SendMessageOptions): Promise<any>
    sendMessage (message: Message, options?: SendMessageOptions): Promise<any>
    sendRequest (body: object, endpoint: string, method: string): Promise<any>
    sendTypingIndicator (milliseconds: number): Promise<any>
    
    getUserProfile (): Promise<Profile>
    
    conversation (factory: FunctionType): Conversation
}
export class Conversation extends Chat {
    bot: BootBot
    userId: string
    constructor(bot: BootBot, userId: string)

    ask (question: string | Message | Array<Message>, answer: FunctionType, callbacks?: Array<FunctionType>, options?: SendMessageOptions): Conversation
    respond (payload: object, data: object): Promise<void>
    
    isActive (): boolean
    isWaitingForAnswer (): boolean

    stopWaitingForAnswer (): void
    start (): Conversation
    end (): Conversation

    get (property: string): any
    set (property: string, value: any): any
}


export interface ButtonTemplate {
    text: string
    buttons: Array<Button>
    sharable?: boolean
}
export interface GenericTemplatePostbackButton {
    type: ButtonType
    title: string
    url?: string
    payload?: string
}
export interface GenericTemplate {
    title: string
    subtitle?: string
    image_url?: string
    default_action?: {
        type: string
        title: string
        url: string
    }
    buttons: Array<PostbackButton>
}
export interface ListTemplate {
    top_element_style?: TopElementStyle
    buttons?: Array<Button>
    elements?: Array<Element>
    sharable?: boolean
}
export interface MediaTemplateElement {
    media_type: MediaType
    attachment_id: string
    url: string
    buttons: Array<Button>
}
export interface MediaTemplate {
    template_type: TemplateType.MEDIA
    elements: Array<Element>
    sharable?: boolean
}
export interface OpenGraphTemplateElement {
    url: string
    buttons: Array<Button>
}
export interface OpenGraphTemplate {
    template_type: TemplateType.OPEN_GRAPH
    elements: Array<OpenGraphTemplateElement>
}
export interface ReceiptTemplateElement {
    title: string
    subtitle?: string
    quantity?: number
    price: number
    currency?: string
    image_url?: string
}
export interface ReceiptTemplateAddress {
    street_1: string
    street_2?: string
    city: string
    postal_code: string
    state: string
    country: string
}
export interface ReceiptTemplateSummary {
    subtotal?: number
    shipping_cost?: number
    total_tax?: number
    total_cost: number
}
export interface ReceiptTemplate {
    template_type: string
    recipient_name: string
    merchant_name?: string
    order_number: string
    currency: string
    payment_method: string
    timestamp?: string
    elements?: Array<ReceiptTemplateElement>
    address?: ReceiptTemplateAddress
    summary: ReceiptTemplateSummary
}
export interface FieldsTemplate {
    label: string
    value: string
}
export interface AirportTemplate {
    airport_code: string
    city: string
    terminal?: string
    gate?: string
}
export interface FlightScheduleTemplate {
    boarding_time?: string
    departure_time?: string
    arrival_time?: string
}
export interface FlightInfoTemplate {
    flight_number: string
    departure_airport: AirportTemplate
    arrival_airport: AirportTemplate
    flight_schedule: FlightScheduleTemplate
}
export interface PassengerInfoTemplate {
    passenger_id: string
    ticket_number?: string
    name: string
}
export interface BoardingPassTemplate {
    passenger_name: string
    pnr_number: string
    travel_class?: string
    seat?: string
    auxiliary_fields?: Array<FieldsTemplate>
    secondary_fields?: Array<FieldsTemplate>
    logo_image_url: string
    header_image_url?: string
    header_text_field?: FieldsTemplate
    qr_code: string
    barcode_image_url: string
    above_bar_code_image_url: string
    flight_info: FlightInfoTemplate
}
export interface AirlineBoardingPassTemplate {
    template_type: TemplateType.AIRLINE_BOARDINGPASS
    intro_message: string
    locale: string
    theme_color?: string
    boarding_pass: Array<BoardingPassTemplate>
}
export interface AirlineCheckInTemplate {
    template_type: TemplateType.AIRLINE_CHECKIN
    intro_message: string
    locale: string
    pnr_number?: string
    checkin_url: string
    flight_info: Array<FlightInfoTemplate>
}
export interface ProductInfoTemplate {
    title: string
    value: string
}
export interface PassengerSegmentInfoTemplate {
    segment_id: string
    passenger_id: string
    seat: string
    seat_type: SeatType
    product_info: ProductInfoTemplate
}
export interface PriceInfoTemplate {
    title: string
    amount: number
    currency?: string
}
export interface AirlineItineraryTemplate {
    template_type: TemplateType.AIRLINE_ITINERARY
    intro_message: string
    locale: string
    theme_color?: string
    pnr_number: string
    passenger_info: Array<PassengerInfoTemplate>
    flight_info: Array<FlightInfoTemplate>
    passenger_segment_info: Array<PassengerSegmentInfoTemplate>
    price_info?: Array<PriceInfoTemplate>
    base_price?: number
    tax?: number
    total_price: number
    currrency: string
}
export interface AirlineUpdateTemplate {
    template_type: TemplateType.AIRLINE_UPDATE
    intro_message: string
    theme_color?: string
    update_type: AirlineUpdateType
    locale: string
    pnr_number?: string
    flight_info: FlightInfoTemplate
}
export type Template = ButtonTemplate | GenericTemplate | ListTemplate | MediaTemplate | OpenGraphTemplate | ReceiptTemplate | AirlineBoardingPassTemplate | AirlineCheckInTemplate | AirlineItineraryTemplate | AirlineUpdateTemplate
