import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Statuspage account resource type.
 */
export type StatuspageAccountType = typeof STATUSPAGE_ACCOUNT | UnparsedObject;
export const STATUSPAGE_ACCOUNT = "statuspage-account";
