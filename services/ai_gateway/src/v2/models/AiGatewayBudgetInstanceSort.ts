import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sort order for budget instance counters.
 */
export type AiGatewayBudgetInstanceSort =
  | typeof SPEND_DESC
  | typeof SPEND_ASC
  | typeof KEY_ASC
  | UnparsedObject;
export const SPEND_DESC = "spend_desc";
export const SPEND_ASC = "spend_asc";
export const KEY_ASC = "key_asc";
