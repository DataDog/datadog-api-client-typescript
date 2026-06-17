import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type identifier for an AWS WIF intake mapping.
 */
export type AwsWifIntakeMappingType =
  | typeof AWS_WIF_INTAKE_MAPPING
  | UnparsedObject;
export const AWS_WIF_INTAKE_MAPPING = "aws_wif_intake_mapping";
