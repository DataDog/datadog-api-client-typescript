import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Dataset } from "./Dataset";
import { DatasetAttributes } from "./DatasetAttributes";
import { DatasetCreateRequest } from "./DatasetCreateRequest";
import { DatasetResponseMulti } from "./DatasetResponseMulti";
import { DatasetResponseSingle } from "./DatasetResponseSingle";
import { DatasetUpdateRequest } from "./DatasetUpdateRequest";
import { FiltersPerProduct } from "./FiltersPerProduct";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Dataset: Dataset,
    DatasetAttributes: DatasetAttributes,
    DatasetCreateRequest: DatasetCreateRequest,
    DatasetResponseMulti: DatasetResponseMulti,
    DatasetResponseSingle: DatasetResponseSingle,
    DatasetUpdateRequest: DatasetUpdateRequest,
    FiltersPerProduct: FiltersPerProduct,
  },
};
