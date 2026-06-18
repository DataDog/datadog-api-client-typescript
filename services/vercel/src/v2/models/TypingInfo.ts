import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { VercelApiKey } from "./VercelApiKey";
import { VercelConfigAttributes } from "./VercelConfigAttributes";
import { VercelConfigDataResponse } from "./VercelConfigDataResponse";
import { VercelConfigResponse } from "./VercelConfigResponse";
import { VercelLogsConfig } from "./VercelLogsConfig";
import { VercelTokenCreateRequest } from "./VercelTokenCreateRequest";
import { VercelTraceConfig } from "./VercelTraceConfig";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    VercelConfigDataResponseType: ["vercelConfiguration"],
    VercelEnvironment: ["production", "preview"],
    VercelLogSource: [
      "static",
      "lambda",
      "edge",
      "build",
      "external",
      "firewall",
    ],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    VercelApiKey: VercelApiKey,
    VercelConfigAttributes: VercelConfigAttributes,
    VercelConfigDataResponse: VercelConfigDataResponse,
    VercelConfigResponse: VercelConfigResponse,
    VercelLogsConfig: VercelLogsConfig,
    VercelTokenCreateRequest: VercelTokenCreateRequest,
    VercelTraceConfig: VercelTraceConfig,
  },
};
