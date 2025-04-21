import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IPPrefixesAPI } from "./IPPrefixesAPI";
import { IPPrefixesAPM } from "./IPPrefixesAPM";
import { IPPrefixesAgents } from "./IPPrefixesAgents";
import { IPPrefixesGlobal } from "./IPPrefixesGlobal";
import { IPPrefixesLogs } from "./IPPrefixesLogs";
import { IPPrefixesOrchestrator } from "./IPPrefixesOrchestrator";
import { IPPrefixesProcess } from "./IPPrefixesProcess";
import { IPPrefixesRemoteConfiguration } from "./IPPrefixesRemoteConfiguration";
import { IPPrefixesSynthetics } from "./IPPrefixesSynthetics";
import { IPPrefixesSyntheticsPrivateLocations } from "./IPPrefixesSyntheticsPrivateLocations";
import { IPPrefixesWebhooks } from "./IPPrefixesWebhooks";
import { IPRanges } from "./IPRanges";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IPPrefixesAPI: IPPrefixesAPI,
    IPPrefixesAPM: IPPrefixesAPM,
    IPPrefixesAgents: IPPrefixesAgents,
    IPPrefixesGlobal: IPPrefixesGlobal,
    IPPrefixesLogs: IPPrefixesLogs,
    IPPrefixesOrchestrator: IPPrefixesOrchestrator,
    IPPrefixesProcess: IPPrefixesProcess,
    IPPrefixesRemoteConfiguration: IPPrefixesRemoteConfiguration,
    IPPrefixesSynthetics: IPPrefixesSynthetics,
    IPPrefixesSyntheticsPrivateLocations: IPPrefixesSyntheticsPrivateLocations,
    IPPrefixesWebhooks: IPPrefixesWebhooks,
    IPRanges: IPRanges,
  },
};
