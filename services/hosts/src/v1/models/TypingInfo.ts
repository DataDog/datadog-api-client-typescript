import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Host } from "./Host";
import { HostListResponse } from "./HostListResponse";
import { HostMeta } from "./HostMeta";
import { HostMetaInstallMethod } from "./HostMetaInstallMethod";
import { HostMetrics } from "./HostMetrics";
import { HostMuteResponse } from "./HostMuteResponse";
import { HostMuteSettings } from "./HostMuteSettings";
import { HostTotals } from "./HostTotals";

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
    HostTotals: HostTotals,
  },
};
