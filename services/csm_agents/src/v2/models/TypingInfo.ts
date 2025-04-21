import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CSMAgentsMetadata } from "./CSMAgentsMetadata";
import { CsmAgentData } from "./CsmAgentData";
import { CsmAgentsAttributes } from "./CsmAgentsAttributes";
import { CsmAgentsResponse } from "./CsmAgentsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CSMAgentsType: ["datadog_agent"],
    OrderDirection: ["asc", "desc"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CSMAgentsMetadata: CSMAgentsMetadata,
    CsmAgentData: CsmAgentData,
    CsmAgentsAttributes: CsmAgentsAttributes,
    CsmAgentsResponse: CsmAgentsResponse,
  },
};
