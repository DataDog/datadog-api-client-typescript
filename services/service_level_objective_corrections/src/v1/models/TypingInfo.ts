import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Creator } from "./Creator";
import { Pagination } from "./Pagination";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { SLOCorrection } from "./SLOCorrection";
import { SLOCorrectionCreateData } from "./SLOCorrectionCreateData";
import { SLOCorrectionCreateRequest } from "./SLOCorrectionCreateRequest";
import { SLOCorrectionCreateRequestAttributes } from "./SLOCorrectionCreateRequestAttributes";
import { SLOCorrectionListResponse } from "./SLOCorrectionListResponse";
import { SLOCorrectionResponse } from "./SLOCorrectionResponse";
import { SLOCorrectionResponseAttributes } from "./SLOCorrectionResponseAttributes";
import { SLOCorrectionResponseAttributesModifier } from "./SLOCorrectionResponseAttributesModifier";
import { SLOCorrectionUpdateData } from "./SLOCorrectionUpdateData";
import { SLOCorrectionUpdateRequest } from "./SLOCorrectionUpdateRequest";
import { SLOCorrectionUpdateRequestAttributes } from "./SLOCorrectionUpdateRequestAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    SLOCorrectionCategory: [
      "Scheduled Maintenance",
      "Outside Business Hours",
      "Deployment",
      "Other",
    ],
    SLOCorrectionType: ["correction"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Creator: Creator,
    Pagination: Pagination,
    ResponseMetaAttributes: ResponseMetaAttributes,
    SLOCorrection: SLOCorrection,
    SLOCorrectionCreateData: SLOCorrectionCreateData,
    SLOCorrectionCreateRequest: SLOCorrectionCreateRequest,
    SLOCorrectionCreateRequestAttributes: SLOCorrectionCreateRequestAttributes,
    SLOCorrectionListResponse: SLOCorrectionListResponse,
    SLOCorrectionResponse: SLOCorrectionResponse,
    SLOCorrectionResponseAttributes: SLOCorrectionResponseAttributes,
    SLOCorrectionResponseAttributesModifier:
      SLOCorrectionResponseAttributesModifier,
    SLOCorrectionUpdateData: SLOCorrectionUpdateData,
    SLOCorrectionUpdateRequest: SLOCorrectionUpdateRequest,
    SLOCorrectionUpdateRequestAttributes: SLOCorrectionUpdateRequestAttributes,
  },
};
