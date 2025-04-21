import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreateOpenAPIResponse } from "./CreateOpenAPIResponse";
import { CreateOpenAPIResponseAttributes } from "./CreateOpenAPIResponseAttributes";
import { CreateOpenAPIResponseData } from "./CreateOpenAPIResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ListAPIsResponse } from "./ListAPIsResponse";
import { ListAPIsResponseData } from "./ListAPIsResponseData";
import { ListAPIsResponseDataAttributes } from "./ListAPIsResponseDataAttributes";
import { ListAPIsResponseMeta } from "./ListAPIsResponseMeta";
import { ListAPIsResponseMetaPagination } from "./ListAPIsResponseMetaPagination";
import { OpenAPIEndpoint } from "./OpenAPIEndpoint";
import { UpdateOpenAPIResponse } from "./UpdateOpenAPIResponse";
import { UpdateOpenAPIResponseAttributes } from "./UpdateOpenAPIResponseAttributes";
import { UpdateOpenAPIResponseData } from "./UpdateOpenAPIResponseData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {},
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreateOpenAPIResponse: CreateOpenAPIResponse,
    CreateOpenAPIResponseAttributes: CreateOpenAPIResponseAttributes,
    CreateOpenAPIResponseData: CreateOpenAPIResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ListAPIsResponse: ListAPIsResponse,
    ListAPIsResponseData: ListAPIsResponseData,
    ListAPIsResponseDataAttributes: ListAPIsResponseDataAttributes,
    ListAPIsResponseMeta: ListAPIsResponseMeta,
    ListAPIsResponseMetaPagination: ListAPIsResponseMetaPagination,
    OpenAPIEndpoint: OpenAPIEndpoint,
    UpdateOpenAPIResponse: UpdateOpenAPIResponse,
    UpdateOpenAPIResponseAttributes: UpdateOpenAPIResponseAttributes,
    UpdateOpenAPIResponseData: UpdateOpenAPIResponseData,
  },
};
