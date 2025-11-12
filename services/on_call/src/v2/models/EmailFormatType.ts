import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies the format of the e-mail that is sent for On-Call notifications
 */
export type EmailFormatType = typeof HTML | typeof TEXT | UnparsedObject;
export const HTML = "html";
export const TEXT = "text";
