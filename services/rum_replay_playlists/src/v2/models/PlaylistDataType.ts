import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * RUM replay playlist resource type.
 */
export type PlaylistDataType = typeof RUM_REPLAY_PLAYLIST | UnparsedObject;
export const RUM_REPLAY_PLAYLIST = "rum_replay_playlist";
