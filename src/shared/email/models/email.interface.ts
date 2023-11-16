import { Email } from '../../../domains/email/models/email.interface';
import { Order } from '../../../domains/order/models/order.interface';
import { EmailType } from './email-type.enum';

export type OrderEmail = Email<EmailType.Order, Order>;
export type ShipmentEmail = Email<EmailType.Shipment, void>;
export type MarketingEmail = Email<EmailType.Marketing, void>;
export type InvoiceEmail = Email<EmailType.Invoice, void>;
