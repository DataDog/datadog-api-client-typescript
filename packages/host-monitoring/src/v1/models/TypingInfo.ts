import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { Host } from "./Host";
import { HostListResponse } from "./HostListResponse";
import { HostMeta } from "./HostMeta";
import { HostMetaInstallMethod } from "./HostMetaInstallMethod";
import { HostMetrics } from "./HostMetrics";
import { HostMuteResponse } from "./HostMuteResponse";
import { HostMuteSettings } from "./HostMuteSettings";
import { HostTags } from "./HostTags";
import { HostTotals } from "./HostTotals";
import { TagToHosts } from "./TagToHosts";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Host: Host,
    HostListResponse: HostListResponse,
    HostMeta: HostMeta,
    HostMetaInstallMethod: HostMetaInstallMethod,
    HostMetrics: HostMetrics,
    HostMuteResponse: HostMuteResponse,
    HostMuteSettings: HostMuteSettings,
    HostTags: HostTags,
    HostTotals: HostTotals,
    TagToHosts: TagToHosts,
  },
};
