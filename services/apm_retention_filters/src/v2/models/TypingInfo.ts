import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ReorderRetentionFiltersRequest } from "./ReorderRetentionFiltersRequest";
import { RetentionFilter } from "./RetentionFilter";
import { RetentionFilterAll } from "./RetentionFilterAll";
import { RetentionFilterAllAttributes } from "./RetentionFilterAllAttributes";
import { RetentionFilterAttributes } from "./RetentionFilterAttributes";
import { RetentionFilterCreateAttributes } from "./RetentionFilterCreateAttributes";
import { RetentionFilterCreateData } from "./RetentionFilterCreateData";
import { RetentionFilterCreateRequest } from "./RetentionFilterCreateRequest";
import { RetentionFilterCreateResponse } from "./RetentionFilterCreateResponse";
import { RetentionFilterResponse } from "./RetentionFilterResponse";
import { RetentionFilterUpdateAttributes } from "./RetentionFilterUpdateAttributes";
import { RetentionFilterUpdateData } from "./RetentionFilterUpdateData";
import { RetentionFilterUpdateRequest } from "./RetentionFilterUpdateRequest";
import { RetentionFilterWithoutAttributes } from "./RetentionFilterWithoutAttributes";
import { RetentionFiltersResponse } from "./RetentionFiltersResponse";
import { SpansFilter } from "./SpansFilter";
import { SpansFilterCreate } from "./SpansFilterCreate";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ApmRetentionFilterType: ["apm_retention_filter"],
    RetentionFilterAllType: [
      "spans-sampling-processor",
      "spans-errors-sampling-processor",
      "spans-appsec-sampling-processor",
    ],
    RetentionFilterType: ["spans-sampling-processor"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ReorderRetentionFiltersRequest: ReorderRetentionFiltersRequest,
    RetentionFilter: RetentionFilter,
    RetentionFilterAll: RetentionFilterAll,
    RetentionFilterAllAttributes: RetentionFilterAllAttributes,
    RetentionFilterAttributes: RetentionFilterAttributes,
    RetentionFilterCreateAttributes: RetentionFilterCreateAttributes,
    RetentionFilterCreateData: RetentionFilterCreateData,
    RetentionFilterCreateRequest: RetentionFilterCreateRequest,
    RetentionFilterCreateResponse: RetentionFilterCreateResponse,
    RetentionFilterResponse: RetentionFilterResponse,
    RetentionFilterUpdateAttributes: RetentionFilterUpdateAttributes,
    RetentionFilterUpdateData: RetentionFilterUpdateData,
    RetentionFilterUpdateRequest: RetentionFilterUpdateRequest,
    RetentionFilterWithoutAttributes: RetentionFilterWithoutAttributes,
    RetentionFiltersResponse: RetentionFiltersResponse,
    SpansFilter: SpansFilter,
    SpansFilterCreate: SpansFilterCreate,
  },
};
