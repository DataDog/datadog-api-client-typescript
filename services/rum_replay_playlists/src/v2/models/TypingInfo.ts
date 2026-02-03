import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Playlist } from "./Playlist";
import { PlaylistArray } from "./PlaylistArray";
import { PlaylistData } from "./PlaylistData";
import { PlaylistDataAttributes } from "./PlaylistDataAttributes";
import { PlaylistDataAttributesCreatedBy } from "./PlaylistDataAttributesCreatedBy";
import { PlaylistsSession } from "./PlaylistsSession";
import { PlaylistsSessionArray } from "./PlaylistsSessionArray";
import { PlaylistsSessionData } from "./PlaylistsSessionData";
import { PlaylistsSessionDataAttributes } from "./PlaylistsSessionDataAttributes";
import { SessionIdArray } from "./SessionIdArray";
import { SessionIdData } from "./SessionIdData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    PlaylistDataType: ["rum_replay_playlist"],
    ViewershipHistorySessionDataType: ["rum_replay_session"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Playlist: Playlist,
    PlaylistArray: PlaylistArray,
    PlaylistData: PlaylistData,
    PlaylistDataAttributes: PlaylistDataAttributes,
    PlaylistDataAttributesCreatedBy: PlaylistDataAttributesCreatedBy,
    PlaylistsSession: PlaylistsSession,
    PlaylistsSessionArray: PlaylistsSessionArray,
    PlaylistsSessionData: PlaylistsSessionData,
    PlaylistsSessionDataAttributes: PlaylistsSessionDataAttributes,
    SessionIdArray: SessionIdArray,
    SessionIdData: SessionIdData,
  },
};
