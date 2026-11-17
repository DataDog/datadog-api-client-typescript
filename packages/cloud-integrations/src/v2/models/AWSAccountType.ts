import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * AWS Account resource type.
 */
export type AWSAccountType = typeof ACCOUNT | UnparsedObject;
export const ACCOUNT = "account";
