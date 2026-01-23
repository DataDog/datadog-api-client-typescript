import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RawErrorBudgetRemaining } from "./RawErrorBudgetRemaining";
import { SLOReportPostResponse } from "./SLOReportPostResponse";
import { SLOReportPostResponseData } from "./SLOReportPostResponseData";
import { SLOReportStatusGetResponse } from "./SLOReportStatusGetResponse";
import { SLOReportStatusGetResponseAttributes } from "./SLOReportStatusGetResponseAttributes";
import { SLOReportStatusGetResponseData } from "./SLOReportStatusGetResponseData";
import { SloReportCreateRequest } from "./SloReportCreateRequest";
import { SloReportCreateRequestAttributes } from "./SloReportCreateRequestAttributes";
import { SloReportCreateRequestData } from "./SloReportCreateRequestData";
import { SloStatusData } from "./SloStatusData";
import { SloStatusDataAttributes } from "./SloStatusDataAttributes";
import { SloStatusResponse } from "./SloStatusResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SLOReportInterval: ["daily", "weekly", "monthly"],
    SLOReportStatus: [
      "in_progress",
      "completed",
      "completed_with_errors",
      "failed",
    ],
    SloStatusType: ["slo_status"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RawErrorBudgetRemaining: RawErrorBudgetRemaining,
    SLOReportPostResponse: SLOReportPostResponse,
    SLOReportPostResponseData: SLOReportPostResponseData,
    SLOReportStatusGetResponse: SLOReportStatusGetResponse,
    SLOReportStatusGetResponseAttributes: SLOReportStatusGetResponseAttributes,
    SLOReportStatusGetResponseData: SLOReportStatusGetResponseData,
    SloReportCreateRequest: SloReportCreateRequest,
    SloReportCreateRequestAttributes: SloReportCreateRequestAttributes,
    SloReportCreateRequestData: SloReportCreateRequestData,
    SloStatusData: SloStatusData,
    SloStatusDataAttributes: SloStatusDataAttributes,
    SloStatusResponse: SloStatusResponse,
  },
};
