import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for content pack state object
 */
export type SecurityMonitoringContentPackStateType =
  | typeof CONTENT_PACK_STATE
  | UnparsedObject;
export const CONTENT_PACK_STATE = "content_pack_state";
