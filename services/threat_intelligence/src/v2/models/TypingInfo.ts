import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { STIXBundleRequest } from "./STIXBundleRequest";
import { STIXIngestResponse } from "./STIXIngestResponse";
import { STIXIngestResponseAttributes } from "./STIXIngestResponseAttributes";
import { STIXIngestResponseData } from "./STIXIngestResponseData";
import { STIXObject } from "./STIXObject";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    STIXBundleType: ["bundle"],
    STIXContentEncoding: ["gzip"],
    STIXIngestResponseType: ["threat-intel-stix-ingest"],
    STIXPatternType: ["stix"],
    STIXSpecVersion: ["2.1"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    STIXBundleRequest: STIXBundleRequest,
    STIXIngestResponse: STIXIngestResponse,
    STIXIngestResponseAttributes: STIXIngestResponseAttributes,
    STIXIngestResponseData: STIXIngestResponseData,
    STIXObject: STIXObject,
  },
};
