import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `aws_scan_options`.
 */
export type AwsScanOptionsType = typeof AWS_SCAN_OPTIONS | UnparsedObject;
export const AWS_SCAN_OPTIONS = "aws_scan_options";
