import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Secret rule resource type.
 */
export type SecretRuleDataType = typeof SECRET_RULE | UnparsedObject;
export const SECRET_RULE = "secret_rule";
