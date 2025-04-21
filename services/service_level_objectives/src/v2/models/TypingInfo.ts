import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { SLOReportPostResponse } from "./SLOReportPostResponse";
import { SLOReportPostResponseData } from "./SLOReportPostResponseData";
import { SLOReportStatusGetResponse } from "./SLOReportStatusGetResponse";
import { SLOReportStatusGetResponseAttributes } from "./SLOReportStatusGetResponseAttributes";
import { SLOReportStatusGetResponseData } from "./SLOReportStatusGetResponseData";
import { SloReportCreateRequest } from "./SloReportCreateRequest";
import { SloReportCreateRequestAttributes } from "./SloReportCreateRequestAttributes";
import { SloReportCreateRequestData } from "./SloReportCreateRequestData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SLOReportInterval: ["daily", "weekly", "monthly"],
    SLOReportStatus: [
      "in_progress",
      "completed",
      "completed_with_errors",
      "failed",
    ],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    SLOReportPostResponse: SLOReportPostResponse,
    SLOReportPostResponseData: SLOReportPostResponseData,
    SLOReportStatusGetResponse: SLOReportStatusGetResponse,
    SLOReportStatusGetResponseAttributes: SLOReportStatusGetResponseAttributes,
    SLOReportStatusGetResponseData: SLOReportStatusGetResponseData,
    SloReportCreateRequest: SloReportCreateRequest,
    SloReportCreateRequestAttributes: SloReportCreateRequestAttributes,
    SloReportCreateRequestData: SloReportCreateRequestData,
  },
};
