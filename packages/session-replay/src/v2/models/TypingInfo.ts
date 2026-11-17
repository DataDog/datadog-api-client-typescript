import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

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
import { Snapshot } from "./Snapshot";
import { SnapshotArray } from "./SnapshotArray";
import { SnapshotCreateRequest } from "./SnapshotCreateRequest";
import { SnapshotCreateRequestData } from "./SnapshotCreateRequestData";
import { SnapshotCreateRequestDataAttributes } from "./SnapshotCreateRequestDataAttributes";
import { SnapshotData } from "./SnapshotData";
import { SnapshotDataAttributes } from "./SnapshotDataAttributes";
import { SnapshotUpdateRequest } from "./SnapshotUpdateRequest";
import { SnapshotUpdateRequestData } from "./SnapshotUpdateRequestData";
import { SnapshotUpdateRequestDataAttributes } from "./SnapshotUpdateRequestDataAttributes";
import { ViewershipHistorySessionArray } from "./ViewershipHistorySessionArray";
import { ViewershipHistorySessionData } from "./ViewershipHistorySessionData";
import { ViewershipHistorySessionDataAttributes } from "./ViewershipHistorySessionDataAttributes";
import { Watch } from "./Watch";
import { WatchData } from "./WatchData";
import { WatchDataAttributes } from "./WatchDataAttributes";
import { WatcherArray } from "./WatcherArray";
import { WatcherData } from "./WatcherData";
import { WatcherDataAttributes } from "./WatcherDataAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    PlaylistDataType: ["rum_replay_playlist"],
    SnapshotUpdateRequestDataType: ["snapshots"],
    ViewershipHistorySessionDataType: ["rum_replay_session"],
    WatchDataType: ["rum_replay_watch"],
    WatcherDataType: ["rum_replay_watcher"],
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
    Snapshot: Snapshot,
    SnapshotArray: SnapshotArray,
    SnapshotCreateRequest: SnapshotCreateRequest,
    SnapshotCreateRequestData: SnapshotCreateRequestData,
    SnapshotCreateRequestDataAttributes: SnapshotCreateRequestDataAttributes,
    SnapshotData: SnapshotData,
    SnapshotDataAttributes: SnapshotDataAttributes,
    SnapshotUpdateRequest: SnapshotUpdateRequest,
    SnapshotUpdateRequestData: SnapshotUpdateRequestData,
    SnapshotUpdateRequestDataAttributes: SnapshotUpdateRequestDataAttributes,
    ViewershipHistorySessionArray: ViewershipHistorySessionArray,
    ViewershipHistorySessionData: ViewershipHistorySessionData,
    ViewershipHistorySessionDataAttributes:
      ViewershipHistorySessionDataAttributes,
    Watch: Watch,
    WatchData: WatchData,
    WatchDataAttributes: WatchDataAttributes,
    WatcherArray: WatcherArray,
    WatcherData: WatcherData,
    WatcherDataAttributes: WatcherDataAttributes,
  },
};
