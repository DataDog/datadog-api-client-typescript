import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The delivery format for dashboard report schedules, or `null` if not set.
 */
export type ReportScheduleResponseAttributesDeliveryFormat =
  | typeof PDF
  | typeof PNG
  | typeof PDF_AND_PNG
  | UnparsedObject;
export const PDF = "pdf";
export const PNG = "png";
export const PDF_AND_PNG = "pdf_and_png";
