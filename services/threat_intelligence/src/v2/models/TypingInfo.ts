import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { STIXBundleRequest } from "./STIXBundleRequest";
import { STIXIndicatorObject } from "./STIXIndicatorObject";
import { STIXIngestResponse } from "./STIXIngestResponse";
import { STIXIngestResponseAttributes } from "./STIXIngestResponseAttributes";
import { STIXIngestResponseData } from "./STIXIngestResponseData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    STIXBundleType: ["bundle"],
    STIXContentEncoding: ["gzip"],
    STIXIndicatorType: ["indicator"],
    STIXIngestResponseType: ["threat-intel-stix-ingest"],
    STIXPatternType: ["stix"],
    STIXSpecVersion: ["2.1"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    STIXBundleRequest: STIXBundleRequest,
    STIXIndicatorObject: STIXIndicatorObject,
    STIXIngestResponse: STIXIngestResponse,
    STIXIngestResponseAttributes: STIXIngestResponseAttributes,
    STIXIngestResponseData: STIXIngestResponseData,
  },
};
