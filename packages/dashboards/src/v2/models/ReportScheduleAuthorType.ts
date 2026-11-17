import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * JSON:API resource type for the included report author.
 */
export type ReportScheduleAuthorType = typeof USERS | UnparsedObject;
export const USERS = "users";
