import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * RUM replay session resource type.
 */
export type ViewershipHistorySessionDataType =
  | typeof RUM_REPLAY_SESSION
  | UnparsedObject;
export const RUM_REPLAY_SESSION = "rum_replay_session";
