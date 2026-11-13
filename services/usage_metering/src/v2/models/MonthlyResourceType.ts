import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of a monthly resource usage record.
 */
export type MonthlyResourceType = typeof MONTHLY_RESOURCE | UnparsedObject;
export const MONTHLY_RESOURCE = "monthly_resource";
