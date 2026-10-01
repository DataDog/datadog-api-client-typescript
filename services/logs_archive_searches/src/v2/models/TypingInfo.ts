import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ArchiveSearchCreateRehydration } from "./ArchiveSearchCreateRehydration";
import { ArchiveSearchCreateRequest } from "./ArchiveSearchCreateRequest";
import { ArchiveSearchCreateRequestAttributes } from "./ArchiveSearchCreateRequestAttributes";
import { ArchiveSearchCreateRequestData } from "./ArchiveSearchCreateRequestData";
import { ArchiveSearchRehydration } from "./ArchiveSearchRehydration";
import { ArchiveSearchResponse } from "./ArchiveSearchResponse";
import { ArchiveSearchResponseAttributes } from "./ArchiveSearchResponseAttributes";
import { ArchiveSearchResponseData } from "./ArchiveSearchResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ArchiveSearchRehydrationTier: ["standard", "flex"],
    ArchiveSearchStatus: [
      "RUNNING",
      "COMPLETED",
      "FAILED",
      "CANCELLED",
      "QUOTA_REACHED",
      "EXPIRED",
    ],
    ArchiveSearchType: ["archive_search"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ArchiveSearchCreateRehydration: ArchiveSearchCreateRehydration,
    ArchiveSearchCreateRequest: ArchiveSearchCreateRequest,
    ArchiveSearchCreateRequestAttributes: ArchiveSearchCreateRequestAttributes,
    ArchiveSearchCreateRequestData: ArchiveSearchCreateRequestData,
    ArchiveSearchRehydration: ArchiveSearchRehydration,
    ArchiveSearchResponse: ArchiveSearchResponse,
    ArchiveSearchResponseAttributes: ArchiveSearchResponseAttributes,
    ArchiveSearchResponseData: ArchiveSearchResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
