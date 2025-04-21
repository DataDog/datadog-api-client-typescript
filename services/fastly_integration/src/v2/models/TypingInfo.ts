import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { FastlyAccounResponseAttributes } from "./FastlyAccounResponseAttributes";
import { FastlyAccountCreateRequest } from "./FastlyAccountCreateRequest";
import { FastlyAccountCreateRequestAttributes } from "./FastlyAccountCreateRequestAttributes";
import { FastlyAccountCreateRequestData } from "./FastlyAccountCreateRequestData";
import { FastlyAccountResponse } from "./FastlyAccountResponse";
import { FastlyAccountResponseData } from "./FastlyAccountResponseData";
import { FastlyAccountUpdateRequest } from "./FastlyAccountUpdateRequest";
import { FastlyAccountUpdateRequestAttributes } from "./FastlyAccountUpdateRequestAttributes";
import { FastlyAccountUpdateRequestData } from "./FastlyAccountUpdateRequestData";
import { FastlyAccountsResponse } from "./FastlyAccountsResponse";
import { FastlyService } from "./FastlyService";
import { FastlyServiceAttributes } from "./FastlyServiceAttributes";
import { FastlyServiceData } from "./FastlyServiceData";
import { FastlyServiceRequest } from "./FastlyServiceRequest";
import { FastlyServiceResponse } from "./FastlyServiceResponse";
import { FastlyServicesResponse } from "./FastlyServicesResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    FastlyAccountType: ["fastly-accounts"],
    FastlyServiceType: ["fastly-services"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    FastlyAccounResponseAttributes: FastlyAccounResponseAttributes,
    FastlyAccountCreateRequest: FastlyAccountCreateRequest,
    FastlyAccountCreateRequestAttributes: FastlyAccountCreateRequestAttributes,
    FastlyAccountCreateRequestData: FastlyAccountCreateRequestData,
    FastlyAccountResponse: FastlyAccountResponse,
    FastlyAccountResponseData: FastlyAccountResponseData,
    FastlyAccountUpdateRequest: FastlyAccountUpdateRequest,
    FastlyAccountUpdateRequestAttributes: FastlyAccountUpdateRequestAttributes,
    FastlyAccountUpdateRequestData: FastlyAccountUpdateRequestData,
    FastlyAccountsResponse: FastlyAccountsResponse,
    FastlyService: FastlyService,
    FastlyServiceAttributes: FastlyServiceAttributes,
    FastlyServiceData: FastlyServiceData,
    FastlyServiceRequest: FastlyServiceRequest,
    FastlyServiceResponse: FastlyServiceResponse,
    FastlyServicesResponse: FastlyServicesResponse,
  },
};
