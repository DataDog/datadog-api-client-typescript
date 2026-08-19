import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RumCrossProductSampling } from "./RumCrossProductSampling";
import { RumCrossProductSamplingCreate } from "./RumCrossProductSamplingCreate";
import { RumCrossProductSamplingUpdate } from "./RumCrossProductSamplingUpdate";
import { RumExclusionFilterAttributes } from "./RumExclusionFilterAttributes";
import { RumExclusionFilterCreateAttributes } from "./RumExclusionFilterCreateAttributes";
import { RumExclusionFilterCreateData } from "./RumExclusionFilterCreateData";
import { RumExclusionFilterCreateRequest } from "./RumExclusionFilterCreateRequest";
import { RumExclusionFilterData } from "./RumExclusionFilterData";
import { RumExclusionFilterMeta } from "./RumExclusionFilterMeta";
import { RumExclusionFilterResponse } from "./RumExclusionFilterResponse";
import { RumExclusionFilterUpdateAttributes } from "./RumExclusionFilterUpdateAttributes";
import { RumExclusionFilterUpdateData } from "./RumExclusionFilterUpdateData";
import { RumExclusionFilterUpdateRequest } from "./RumExclusionFilterUpdateRequest";
import { RumExclusionFiltersResponse } from "./RumExclusionFiltersResponse";
import { RumPermanentRetentionFilterAttributes } from "./RumPermanentRetentionFilterAttributes";
import { RumPermanentRetentionFilterData } from "./RumPermanentRetentionFilterData";
import { RumPermanentRetentionFilterEditability } from "./RumPermanentRetentionFilterEditability";
import { RumPermanentRetentionFilterResponse } from "./RumPermanentRetentionFilterResponse";
import { RumPermanentRetentionFilterUpdateAttributes } from "./RumPermanentRetentionFilterUpdateAttributes";
import { RumPermanentRetentionFilterUpdateData } from "./RumPermanentRetentionFilterUpdateData";
import { RumPermanentRetentionFilterUpdateRequest } from "./RumPermanentRetentionFilterUpdateRequest";
import { RumPermanentRetentionFiltersResponse } from "./RumPermanentRetentionFiltersResponse";
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
    RumExclusionFilterEventType: [
      "session",
      "view",
      "action",
      "error",
      "resource",
      "long_task",
      "vital",
    ],
    RumExclusionFilterType: ["exclusion_filters"],
    RumPermanentRetentionFilterID: [
      "rum_apm_flat_sampling",
      "synthetics_sessions",
      "forced_replay_sessions",
    ],
    RumPermanentRetentionFilterType: ["permanent_retention_filters"],
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
    RumCrossProductSampling: RumCrossProductSampling,
    RumCrossProductSamplingCreate: RumCrossProductSamplingCreate,
    RumCrossProductSamplingUpdate: RumCrossProductSamplingUpdate,
    RumExclusionFilterAttributes: RumExclusionFilterAttributes,
    RumExclusionFilterCreateAttributes: RumExclusionFilterCreateAttributes,
    RumExclusionFilterCreateData: RumExclusionFilterCreateData,
    RumExclusionFilterCreateRequest: RumExclusionFilterCreateRequest,
    RumExclusionFilterData: RumExclusionFilterData,
    RumExclusionFilterMeta: RumExclusionFilterMeta,
    RumExclusionFilterResponse: RumExclusionFilterResponse,
    RumExclusionFilterUpdateAttributes: RumExclusionFilterUpdateAttributes,
    RumExclusionFilterUpdateData: RumExclusionFilterUpdateData,
    RumExclusionFilterUpdateRequest: RumExclusionFilterUpdateRequest,
    RumExclusionFiltersResponse: RumExclusionFiltersResponse,
    RumPermanentRetentionFilterAttributes:
      RumPermanentRetentionFilterAttributes,
    RumPermanentRetentionFilterData: RumPermanentRetentionFilterData,
    RumPermanentRetentionFilterEditability:
      RumPermanentRetentionFilterEditability,
    RumPermanentRetentionFilterResponse: RumPermanentRetentionFilterResponse,
    RumPermanentRetentionFilterUpdateAttributes:
      RumPermanentRetentionFilterUpdateAttributes,
    RumPermanentRetentionFilterUpdateData:
      RumPermanentRetentionFilterUpdateData,
    RumPermanentRetentionFilterUpdateRequest:
      RumPermanentRetentionFilterUpdateRequest,
    RumPermanentRetentionFiltersResponse: RumPermanentRetentionFiltersResponse,
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
