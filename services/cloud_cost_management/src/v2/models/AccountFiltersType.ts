import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of account filters.
 */
export type AccountFiltersType = typeof ACCOUNT_FILTERS | UnparsedObject;
export const ACCOUNT_FILTERS = "account_filters";
