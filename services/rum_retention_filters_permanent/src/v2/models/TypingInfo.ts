import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RumPermanentCrossProductSampling } from "./RumPermanentCrossProductSampling";
import { RumPermanentCrossProductSamplingEditability } from "./RumPermanentCrossProductSamplingEditability";
import { RumPermanentCrossProductSamplingUpdate } from "./RumPermanentCrossProductSamplingUpdate";
import { RumPermanentRetentionFilterAttributes } from "./RumPermanentRetentionFilterAttributes";
import { RumPermanentRetentionFilterData } from "./RumPermanentRetentionFilterData";
import { RumPermanentRetentionFilterMeta } from "./RumPermanentRetentionFilterMeta";
import { RumPermanentRetentionFilterResponse } from "./RumPermanentRetentionFilterResponse";
import { RumPermanentRetentionFilterUpdateAttributes } from "./RumPermanentRetentionFilterUpdateAttributes";
import { RumPermanentRetentionFilterUpdateData } from "./RumPermanentRetentionFilterUpdateData";
import { RumPermanentRetentionFilterUpdateRequest } from "./RumPermanentRetentionFilterUpdateRequest";
import { RumPermanentRetentionFiltersResponse } from "./RumPermanentRetentionFiltersResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RumPermanentRetentionFilterEventType: [
      "session",
      "view",
      "action",
      "error",
      "resource",
      "long_task",
      "vital",
      "operation",
    ],
    RumPermanentRetentionFilterMetaSource: ["default", "ui", "terraform"],
    RumPermanentRetentionFilterType: ["permanent_retention_filters"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RumPermanentCrossProductSampling: RumPermanentCrossProductSampling,
    RumPermanentCrossProductSamplingEditability:
      RumPermanentCrossProductSamplingEditability,
    RumPermanentCrossProductSamplingUpdate:
      RumPermanentCrossProductSamplingUpdate,
    RumPermanentRetentionFilterAttributes:
      RumPermanentRetentionFilterAttributes,
    RumPermanentRetentionFilterData: RumPermanentRetentionFilterData,
    RumPermanentRetentionFilterMeta: RumPermanentRetentionFilterMeta,
    RumPermanentRetentionFilterResponse: RumPermanentRetentionFilterResponse,
    RumPermanentRetentionFilterUpdateAttributes:
      RumPermanentRetentionFilterUpdateAttributes,
    RumPermanentRetentionFilterUpdateData:
      RumPermanentRetentionFilterUpdateData,
    RumPermanentRetentionFilterUpdateRequest:
      RumPermanentRetentionFilterUpdateRequest,
    RumPermanentRetentionFiltersResponse: RumPermanentRetentionFiltersResponse,
  },
};
