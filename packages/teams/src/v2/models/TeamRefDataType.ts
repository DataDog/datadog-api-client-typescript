import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Datadog team resource type.
 */
export type TeamRefDataType = typeof TEAM | UnparsedObject;
export const TEAM = "team";
