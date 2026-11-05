import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Action taken when request rate exceeds the limit.
 */
export type AiGatewayRateLimitMode =
  | typeof ALERT
  | typeof ENFORCE
  | UnparsedObject;
export const ALERT = "ALERT";
export const ENFORCE = "ENFORCE";
