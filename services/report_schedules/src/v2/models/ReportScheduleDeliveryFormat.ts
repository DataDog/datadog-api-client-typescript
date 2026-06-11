import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How a PDF-export report is delivered. `pdf` attaches a PDF file, `png` embeds
 * an inline PNG image, and `pdf_and_png` delivers both.
 */
export type ReportScheduleDeliveryFormat =
  | typeof PDF
  | typeof PNG
  | typeof PDF_AND_PNG
  | UnparsedObject;
export const PDF = "pdf";
export const PNG = "png";
export const PDF_AND_PNG = "pdf_and_png";
