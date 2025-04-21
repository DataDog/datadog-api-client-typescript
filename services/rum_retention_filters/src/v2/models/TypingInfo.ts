import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RumRetentionFilterAttributes } from "./RumRetentionFilterAttributes";
import { RumRetentionFilterCreateAttributes } from "./RumRetentionFilterCreateAttributes";
import { RumRetentionFilterCreateData } from "./RumRetentionFilterCreateData";
import { RumRetentionFilterCreateRequest } from "./RumRetentionFilterCreateRequest";
import { RumRetentionFilterData } from "./RumRetentionFilterData";
import { RumRetentionFilterResponse } from "./RumRetentionFilterResponse";
import { RumRetentionFilterUpdateAttributes } from "./RumRetentionFilterUpdateAttributes";
import { RumRetentionFilterUpdateData } from "./RumRetentionFilterUpdateData";
import { RumRetentionFilterUpdateRequest } from "./RumRetentionFilterUpdateRequest";
import { RumRetentionFiltersOrderData } from "./RumRetentionFiltersOrderData";
import { RumRetentionFiltersOrderRequest } from "./RumRetentionFiltersOrderRequest";
import { RumRetentionFiltersOrderResponse } from "./RumRetentionFiltersOrderResponse";
import { RumRetentionFiltersResponse } from "./RumRetentionFiltersResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RumRetentionFilterEventType: [
      "session",
      "view",
      "action",
      "error",
      "resource",
      "long_task",
      "vital",
    ],
    RumRetentionFilterType: ["retention_filters"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RumRetentionFilterAttributes: RumRetentionFilterAttributes,
    RumRetentionFilterCreateAttributes: RumRetentionFilterCreateAttributes,
    RumRetentionFilterCreateData: RumRetentionFilterCreateData,
    RumRetentionFilterCreateRequest: RumRetentionFilterCreateRequest,
    RumRetentionFilterData: RumRetentionFilterData,
    RumRetentionFilterResponse: RumRetentionFilterResponse,
    RumRetentionFilterUpdateAttributes: RumRetentionFilterUpdateAttributes,
    RumRetentionFilterUpdateData: RumRetentionFilterUpdateData,
    RumRetentionFilterUpdateRequest: RumRetentionFilterUpdateRequest,
    RumRetentionFiltersOrderData: RumRetentionFiltersOrderData,
    RumRetentionFiltersOrderRequest: RumRetentionFiltersOrderRequest,
    RumRetentionFiltersOrderResponse: RumRetentionFiltersOrderResponse,
    RumRetentionFiltersResponse: RumRetentionFiltersResponse,
  },
};
