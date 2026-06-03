import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RumHardcodedCrossProductSampling } from "./RumHardcodedCrossProductSampling";
import { RumHardcodedCrossProductSamplingEditability } from "./RumHardcodedCrossProductSamplingEditability";
import { RumHardcodedCrossProductSamplingUpdate } from "./RumHardcodedCrossProductSamplingUpdate";
import { RumHardcodedRetentionFilterAttributes } from "./RumHardcodedRetentionFilterAttributes";
import { RumHardcodedRetentionFilterData } from "./RumHardcodedRetentionFilterData";
import { RumHardcodedRetentionFilterMeta } from "./RumHardcodedRetentionFilterMeta";
import { RumHardcodedRetentionFilterResponse } from "./RumHardcodedRetentionFilterResponse";
import { RumHardcodedRetentionFilterUpdateAttributes } from "./RumHardcodedRetentionFilterUpdateAttributes";
import { RumHardcodedRetentionFilterUpdateData } from "./RumHardcodedRetentionFilterUpdateData";
import { RumHardcodedRetentionFilterUpdateRequest } from "./RumHardcodedRetentionFilterUpdateRequest";
import { RumHardcodedRetentionFiltersResponse } from "./RumHardcodedRetentionFiltersResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RumHardcodedRetentionFilterEventType: [
      "session",
      "view",
      "action",
      "error",
      "resource",
      "long_task",
      "vital",
    ],
    RumHardcodedRetentionFilterMetaSource: ["default", "ui", "terraform"],
    RumHardcodedRetentionFilterType: ["hardcoded_retention_filters"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RumHardcodedCrossProductSampling: RumHardcodedCrossProductSampling,
    RumHardcodedCrossProductSamplingEditability:
      RumHardcodedCrossProductSamplingEditability,
    RumHardcodedCrossProductSamplingUpdate:
      RumHardcodedCrossProductSamplingUpdate,
    RumHardcodedRetentionFilterAttributes:
      RumHardcodedRetentionFilterAttributes,
    RumHardcodedRetentionFilterData: RumHardcodedRetentionFilterData,
    RumHardcodedRetentionFilterMeta: RumHardcodedRetentionFilterMeta,
    RumHardcodedRetentionFilterResponse: RumHardcodedRetentionFilterResponse,
    RumHardcodedRetentionFilterUpdateAttributes:
      RumHardcodedRetentionFilterUpdateAttributes,
    RumHardcodedRetentionFilterUpdateData:
      RumHardcodedRetentionFilterUpdateData,
    RumHardcodedRetentionFilterUpdateRequest:
      RumHardcodedRetentionFilterUpdateRequest,
    RumHardcodedRetentionFiltersResponse: RumHardcodedRetentionFiltersResponse,
  },
};
