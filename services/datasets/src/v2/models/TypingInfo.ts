import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DatasetAttributesRequest } from "./DatasetAttributesRequest";
import { DatasetAttributesResponse } from "./DatasetAttributesResponse";
import { DatasetCreateRequest } from "./DatasetCreateRequest";
import { DatasetRequest } from "./DatasetRequest";
import { DatasetResponse } from "./DatasetResponse";
import { DatasetResponseMulti } from "./DatasetResponseMulti";
import { DatasetResponseSingle } from "./DatasetResponseSingle";
import { DatasetUpdateRequest } from "./DatasetUpdateRequest";
import { FiltersPerProduct } from "./FiltersPerProduct";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DatasetAttributesRequest: DatasetAttributesRequest,
    DatasetAttributesResponse: DatasetAttributesResponse,
    DatasetCreateRequest: DatasetCreateRequest,
    DatasetRequest: DatasetRequest,
    DatasetResponse: DatasetResponse,
    DatasetResponseMulti: DatasetResponseMulti,
    DatasetResponseSingle: DatasetResponseSingle,
    DatasetUpdateRequest: DatasetUpdateRequest,
    FiltersPerProduct: FiltersPerProduct,
  },
};
