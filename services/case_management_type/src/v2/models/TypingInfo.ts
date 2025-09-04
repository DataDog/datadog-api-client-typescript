import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CaseTypeCreate } from "./CaseTypeCreate";
import { CaseTypeCreateRequest } from "./CaseTypeCreateRequest";
import { CaseTypeResource } from "./CaseTypeResource";
import { CaseTypeResourceAttributes } from "./CaseTypeResourceAttributes";
import { CaseTypeResponse } from "./CaseTypeResponse";
import { CaseTypesResponse } from "./CaseTypesResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CaseTypeResourceType: ["case_type"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CaseTypeCreate: CaseTypeCreate,
    CaseTypeCreateRequest: CaseTypeCreateRequest,
    CaseTypeResource: CaseTypeResource,
    CaseTypeResourceAttributes: CaseTypeResourceAttributes,
    CaseTypeResponse: CaseTypeResponse,
    CaseTypesResponse: CaseTypesResponse,
  },
};
