import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of `AWSIntegrationType` object.
 */
export type AWSIntegrationType = typeof AWS | UnparsedObject;
export const AWS = "AWS";
