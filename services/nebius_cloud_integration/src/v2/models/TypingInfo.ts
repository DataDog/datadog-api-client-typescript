import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { NebiusCloudCostCollectionIntegrationDataflowRequest } from "./NebiusCloudCostCollectionIntegrationDataflowRequest";
import { NebiusCloudCostCollectionIntegrationDataflowResponse } from "./NebiusCloudCostCollectionIntegrationDataflowResponse";
import { NebiusCloudCostCollectionIntegrationDataflowSettingsRequest } from "./NebiusCloudCostCollectionIntegrationDataflowSettingsRequest";
import { NebiusCloudCostCollectionIntegrationDataflowSettingsResponse } from "./NebiusCloudCostCollectionIntegrationDataflowSettingsResponse";
import { NebiusCloudIntegrationAccountCreateAttributes } from "./NebiusCloudIntegrationAccountCreateAttributes";
import { NebiusCloudIntegrationAccountCreateData } from "./NebiusCloudIntegrationAccountCreateData";
import { NebiusCloudIntegrationAccountCreateRequest } from "./NebiusCloudIntegrationAccountCreateRequest";
import { NebiusCloudIntegrationAccountResponse } from "./NebiusCloudIntegrationAccountResponse";
import { NebiusCloudIntegrationAccountResponseAttributes } from "./NebiusCloudIntegrationAccountResponseAttributes";
import { NebiusCloudIntegrationAccountResponseData } from "./NebiusCloudIntegrationAccountResponseData";
import { NebiusCloudIntegrationAccountServiceAccountAuthRequest } from "./NebiusCloudIntegrationAccountServiceAccountAuthRequest";
import { NebiusCloudIntegrationAccountServiceAccountAuthResponse } from "./NebiusCloudIntegrationAccountServiceAccountAuthResponse";
import { NebiusCloudIntegrationAccountServiceAccountAuthUpdate } from "./NebiusCloudIntegrationAccountServiceAccountAuthUpdate";
import { NebiusCloudIntegrationAccountSettingsRequest } from "./NebiusCloudIntegrationAccountSettingsRequest";
import { NebiusCloudIntegrationAccountSettingsResponse } from "./NebiusCloudIntegrationAccountSettingsResponse";
import { NebiusCloudIntegrationAccountSettingsUpdate } from "./NebiusCloudIntegrationAccountSettingsUpdate";
import { NebiusCloudIntegrationAccountUpdateAttributes } from "./NebiusCloudIntegrationAccountUpdateAttributes";
import { NebiusCloudIntegrationAccountUpdateData } from "./NebiusCloudIntegrationAccountUpdateData";
import { NebiusCloudIntegrationAccountUpdateRequest } from "./NebiusCloudIntegrationAccountUpdateRequest";
import { NebiusCloudIntegrationAccountsResponse } from "./NebiusCloudIntegrationAccountsResponse";
import { NebiusCloudIntegrationDataflowsRequest } from "./NebiusCloudIntegrationDataflowsRequest";
import { NebiusCloudIntegrationDataflowsResponse } from "./NebiusCloudIntegrationDataflowsResponse";
import { NebiusCloudLogsIntegrationDataflowRequest } from "./NebiusCloudLogsIntegrationDataflowRequest";
import { NebiusCloudLogsIntegrationDataflowResponse } from "./NebiusCloudLogsIntegrationDataflowResponse";
import { NebiusCloudLogsIntegrationDataflowSettingsRequest } from "./NebiusCloudLogsIntegrationDataflowSettingsRequest";
import { NebiusCloudLogsIntegrationDataflowSettingsResponse } from "./NebiusCloudLogsIntegrationDataflowSettingsResponse";
import { NebiusCloudResourcesIntegrationDataflowRequest } from "./NebiusCloudResourcesIntegrationDataflowRequest";
import { NebiusCloudResourcesIntegrationDataflowResponse } from "./NebiusCloudResourcesIntegrationDataflowResponse";
import { NebiusCloudServiceQuotaCollectionIntegrationDataflowRequest } from "./NebiusCloudServiceQuotaCollectionIntegrationDataflowRequest";
import { NebiusCloudServiceQuotaCollectionIntegrationDataflowResponse } from "./NebiusCloudServiceQuotaCollectionIntegrationDataflowResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IntegrationAccountType: ["integration-account"],
    NebiusCloudIntegrationAccountServiceAccountAuthType: [
      "nebius_service_account",
    ],
  },
  oneOfMap: {
    NebiusCloudIntegrationAccountAuthenticationRequest: [
      "NebiusCloudIntegrationAccountServiceAccountAuthRequest",
    ],
    NebiusCloudIntegrationAccountAuthenticationResponse: [
      "NebiusCloudIntegrationAccountServiceAccountAuthResponse",
    ],
    NebiusCloudIntegrationAccountAuthenticationUpdate: [
      "NebiusCloudIntegrationAccountServiceAccountAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    NebiusCloudCostCollectionIntegrationDataflowRequest:
      NebiusCloudCostCollectionIntegrationDataflowRequest,
    NebiusCloudCostCollectionIntegrationDataflowResponse:
      NebiusCloudCostCollectionIntegrationDataflowResponse,
    NebiusCloudCostCollectionIntegrationDataflowSettingsRequest:
      NebiusCloudCostCollectionIntegrationDataflowSettingsRequest,
    NebiusCloudCostCollectionIntegrationDataflowSettingsResponse:
      NebiusCloudCostCollectionIntegrationDataflowSettingsResponse,
    NebiusCloudIntegrationAccountCreateAttributes:
      NebiusCloudIntegrationAccountCreateAttributes,
    NebiusCloudIntegrationAccountCreateData:
      NebiusCloudIntegrationAccountCreateData,
    NebiusCloudIntegrationAccountCreateRequest:
      NebiusCloudIntegrationAccountCreateRequest,
    NebiusCloudIntegrationAccountResponse:
      NebiusCloudIntegrationAccountResponse,
    NebiusCloudIntegrationAccountResponseAttributes:
      NebiusCloudIntegrationAccountResponseAttributes,
    NebiusCloudIntegrationAccountResponseData:
      NebiusCloudIntegrationAccountResponseData,
    NebiusCloudIntegrationAccountServiceAccountAuthRequest:
      NebiusCloudIntegrationAccountServiceAccountAuthRequest,
    NebiusCloudIntegrationAccountServiceAccountAuthResponse:
      NebiusCloudIntegrationAccountServiceAccountAuthResponse,
    NebiusCloudIntegrationAccountServiceAccountAuthUpdate:
      NebiusCloudIntegrationAccountServiceAccountAuthUpdate,
    NebiusCloudIntegrationAccountSettingsRequest:
      NebiusCloudIntegrationAccountSettingsRequest,
    NebiusCloudIntegrationAccountSettingsResponse:
      NebiusCloudIntegrationAccountSettingsResponse,
    NebiusCloudIntegrationAccountSettingsUpdate:
      NebiusCloudIntegrationAccountSettingsUpdate,
    NebiusCloudIntegrationAccountUpdateAttributes:
      NebiusCloudIntegrationAccountUpdateAttributes,
    NebiusCloudIntegrationAccountUpdateData:
      NebiusCloudIntegrationAccountUpdateData,
    NebiusCloudIntegrationAccountUpdateRequest:
      NebiusCloudIntegrationAccountUpdateRequest,
    NebiusCloudIntegrationAccountsResponse:
      NebiusCloudIntegrationAccountsResponse,
    NebiusCloudIntegrationDataflowsRequest:
      NebiusCloudIntegrationDataflowsRequest,
    NebiusCloudIntegrationDataflowsResponse:
      NebiusCloudIntegrationDataflowsResponse,
    NebiusCloudLogsIntegrationDataflowRequest:
      NebiusCloudLogsIntegrationDataflowRequest,
    NebiusCloudLogsIntegrationDataflowResponse:
      NebiusCloudLogsIntegrationDataflowResponse,
    NebiusCloudLogsIntegrationDataflowSettingsRequest:
      NebiusCloudLogsIntegrationDataflowSettingsRequest,
    NebiusCloudLogsIntegrationDataflowSettingsResponse:
      NebiusCloudLogsIntegrationDataflowSettingsResponse,
    NebiusCloudResourcesIntegrationDataflowRequest:
      NebiusCloudResourcesIntegrationDataflowRequest,
    NebiusCloudResourcesIntegrationDataflowResponse:
      NebiusCloudResourcesIntegrationDataflowResponse,
    NebiusCloudServiceQuotaCollectionIntegrationDataflowRequest:
      NebiusCloudServiceQuotaCollectionIntegrationDataflowRequest,
    NebiusCloudServiceQuotaCollectionIntegrationDataflowResponse:
      NebiusCloudServiceQuotaCollectionIntegrationDataflowResponse,
  },
};
