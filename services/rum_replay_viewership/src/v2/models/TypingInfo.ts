import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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
    ViewershipHistorySessionDataType: ["rum_replay_session"],
    WatchDataType: ["rum_replay_watch"],
    WatcherDataType: ["rum_replay_watcher"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
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
