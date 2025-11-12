import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Datadog team resource type.
 */
export type TeamRefDataType = typeof TEAM | UnparsedObject;
export const TEAM = "team";
