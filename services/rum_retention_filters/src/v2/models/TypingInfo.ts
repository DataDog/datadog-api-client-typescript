import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RUMCrossProductSampling } from "./RUMCrossProductSampling";
import { RUMCrossProductSamplingCreate } from "./RUMCrossProductSamplingCreate";
import { RUMCrossProductSamplingUpdate } from "./RUMCrossProductSamplingUpdate";
import { RUMExclusionFilterAttributes } from "./RUMExclusionFilterAttributes";
import { RUMExclusionFilterCreateAttributes } from "./RUMExclusionFilterCreateAttributes";
import { RUMExclusionFilterCreateData } from "./RUMExclusionFilterCreateData";
import { RUMExclusionFilterCreateRequest } from "./RUMExclusionFilterCreateRequest";
import { RUMExclusionFilterData } from "./RUMExclusionFilterData";
import { RUMExclusionFilterMeta } from "./RUMExclusionFilterMeta";
import { RUMExclusionFilterResponse } from "./RUMExclusionFilterResponse";
import { RUMExclusionFilterUpdateAttributes } from "./RUMExclusionFilterUpdateAttributes";
import { RUMExclusionFilterUpdateData } from "./RUMExclusionFilterUpdateData";
import { RUMExclusionFilterUpdateRequest } from "./RUMExclusionFilterUpdateRequest";
import { RUMExclusionFiltersResponse } from "./RUMExclusionFiltersResponse";
import { RUMPermanentRetentionFilterAttributes } from "./RUMPermanentRetentionFilterAttributes";
import { RUMPermanentRetentionFilterData } from "./RUMPermanentRetentionFilterData";
import { RUMPermanentRetentionFilterEditability } from "./RUMPermanentRetentionFilterEditability";
import { RUMPermanentRetentionFilterResponse } from "./RUMPermanentRetentionFilterResponse";
import { RUMPermanentRetentionFilterUpdateAttributes } from "./RUMPermanentRetentionFilterUpdateAttributes";
import { RUMPermanentRetentionFilterUpdateData } from "./RUMPermanentRetentionFilterUpdateData";
import { RUMPermanentRetentionFilterUpdateRequest } from "./RUMPermanentRetentionFilterUpdateRequest";
import { RUMPermanentRetentionFiltersResponse } from "./RUMPermanentRetentionFiltersResponse";
import { RUMRetentionFilterAttributes } from "./RUMRetentionFilterAttributes";
import { RUMRetentionFilterCreateAttributes } from "./RUMRetentionFilterCreateAttributes";
import { RUMRetentionFilterCreateData } from "./RUMRetentionFilterCreateData";
import { RUMRetentionFilterCreateRequest } from "./RUMRetentionFilterCreateRequest";
import { RUMRetentionFilterData } from "./RUMRetentionFilterData";
import { RUMRetentionFilterMeta } from "./RUMRetentionFilterMeta";
import { RUMRetentionFilterResponse } from "./RUMRetentionFilterResponse";
import { RUMRetentionFilterUpdateAttributes } from "./RUMRetentionFilterUpdateAttributes";
import { RUMRetentionFilterUpdateData } from "./RUMRetentionFilterUpdateData";
import { RUMRetentionFilterUpdateRequest } from "./RUMRetentionFilterUpdateRequest";
import { RUMRetentionFiltersOrderData } from "./RUMRetentionFiltersOrderData";
import { RUMRetentionFiltersOrderRequest } from "./RUMRetentionFiltersOrderRequest";
import { RUMRetentionFiltersOrderResponse } from "./RUMRetentionFiltersOrderResponse";
import { RUMRetentionFiltersResponse } from "./RUMRetentionFiltersResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RUMExclusionFilterEventType: [
      "session",
      "view",
      "action",
      "error",
      "resource",
      "long_task",
      "vital",
    ],
    RUMExclusionFilterType: ["exclusion_filters"],
    RUMPermanentRetentionFilterID: [
      "rum_apm_flat_sampling",
      "synthetics_sessions",
      "forced_replay_sessions",
    ],
    RUMPermanentRetentionFilterType: ["permanent_retention_filters"],
    RUMRetentionFilterEditionMode: ["unknown", "complete", "limited"],
    RUMRetentionFilterEventType: [
      "session",
      "view",
      "action",
      "error",
      "resource",
      "long_task",
      "vital",
    ],
    RUMRetentionFilterMetaSource: ["default", "ui", "terraform", "unknown"],
    RUMRetentionFilterTrack: ["rum", "product_analytics"],
    RUMRetentionFilterType: ["retention_filters"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RUMCrossProductSampling: RUMCrossProductSampling,
    RUMCrossProductSamplingCreate: RUMCrossProductSamplingCreate,
    RUMCrossProductSamplingUpdate: RUMCrossProductSamplingUpdate,
    RUMExclusionFilterAttributes: RUMExclusionFilterAttributes,
    RUMExclusionFilterCreateAttributes: RUMExclusionFilterCreateAttributes,
    RUMExclusionFilterCreateData: RUMExclusionFilterCreateData,
    RUMExclusionFilterCreateRequest: RUMExclusionFilterCreateRequest,
    RUMExclusionFilterData: RUMExclusionFilterData,
    RUMExclusionFilterMeta: RUMExclusionFilterMeta,
    RUMExclusionFilterResponse: RUMExclusionFilterResponse,
    RUMExclusionFilterUpdateAttributes: RUMExclusionFilterUpdateAttributes,
    RUMExclusionFilterUpdateData: RUMExclusionFilterUpdateData,
    RUMExclusionFilterUpdateRequest: RUMExclusionFilterUpdateRequest,
    RUMExclusionFiltersResponse: RUMExclusionFiltersResponse,
    RUMPermanentRetentionFilterAttributes:
      RUMPermanentRetentionFilterAttributes,
    RUMPermanentRetentionFilterData: RUMPermanentRetentionFilterData,
    RUMPermanentRetentionFilterEditability:
      RUMPermanentRetentionFilterEditability,
    RUMPermanentRetentionFilterResponse: RUMPermanentRetentionFilterResponse,
    RUMPermanentRetentionFilterUpdateAttributes:
      RUMPermanentRetentionFilterUpdateAttributes,
    RUMPermanentRetentionFilterUpdateData:
      RUMPermanentRetentionFilterUpdateData,
    RUMPermanentRetentionFilterUpdateRequest:
      RUMPermanentRetentionFilterUpdateRequest,
    RUMPermanentRetentionFiltersResponse: RUMPermanentRetentionFiltersResponse,
    RUMRetentionFilterAttributes: RUMRetentionFilterAttributes,
    RUMRetentionFilterCreateAttributes: RUMRetentionFilterCreateAttributes,
    RUMRetentionFilterCreateData: RUMRetentionFilterCreateData,
    RUMRetentionFilterCreateRequest: RUMRetentionFilterCreateRequest,
    RUMRetentionFilterData: RUMRetentionFilterData,
    RUMRetentionFilterMeta: RUMRetentionFilterMeta,
    RUMRetentionFilterResponse: RUMRetentionFilterResponse,
    RUMRetentionFilterUpdateAttributes: RUMRetentionFilterUpdateAttributes,
    RUMRetentionFilterUpdateData: RUMRetentionFilterUpdateData,
    RUMRetentionFilterUpdateRequest: RUMRetentionFilterUpdateRequest,
    RUMRetentionFiltersOrderData: RUMRetentionFiltersOrderData,
    RUMRetentionFiltersOrderRequest: RUMRetentionFiltersOrderRequest,
    RUMRetentionFiltersOrderResponse: RUMRetentionFiltersOrderResponse,
    RUMRetentionFiltersResponse: RUMRetentionFiltersResponse,
  },
};
