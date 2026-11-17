import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CoreWeaveCloudIntegrationAccountAPITokenAuthRequest } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthRequest";
import { CoreWeaveCloudIntegrationAccountAPITokenAuthResponse } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthResponse";
import { CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate } from "./CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate";
import { CoreWeaveCloudIntegrationAccountCreateAttributes } from "./CoreWeaveCloudIntegrationAccountCreateAttributes";
import { CoreWeaveCloudIntegrationAccountCreateData } from "./CoreWeaveCloudIntegrationAccountCreateData";
import { CoreWeaveCloudIntegrationAccountCreateRequest } from "./CoreWeaveCloudIntegrationAccountCreateRequest";
import { CoreWeaveCloudIntegrationAccountResponse } from "./CoreWeaveCloudIntegrationAccountResponse";
import { CoreWeaveCloudIntegrationAccountResponseAttributes } from "./CoreWeaveCloudIntegrationAccountResponseAttributes";
import { CoreWeaveCloudIntegrationAccountResponseData } from "./CoreWeaveCloudIntegrationAccountResponseData";
import { CoreWeaveCloudIntegrationAccountSettingsRequest } from "./CoreWeaveCloudIntegrationAccountSettingsRequest";
import { CoreWeaveCloudIntegrationAccountSettingsResponse } from "./CoreWeaveCloudIntegrationAccountSettingsResponse";
import { CoreWeaveCloudIntegrationAccountSettingsUpdate } from "./CoreWeaveCloudIntegrationAccountSettingsUpdate";
import { CoreWeaveCloudIntegrationAccountUpdateAttributes } from "./CoreWeaveCloudIntegrationAccountUpdateAttributes";
import { CoreWeaveCloudIntegrationAccountUpdateData } from "./CoreWeaveCloudIntegrationAccountUpdateData";
import { CoreWeaveCloudIntegrationAccountUpdateRequest } from "./CoreWeaveCloudIntegrationAccountUpdateRequest";
import { CoreWeaveCloudIntegrationAccountsResponse } from "./CoreWeaveCloudIntegrationAccountsResponse";
import { CoreWeaveCloudIntegrationDataflowsRequest } from "./CoreWeaveCloudIntegrationDataflowsRequest";
import { CoreWeaveCloudIntegrationDataflowsResponse } from "./CoreWeaveCloudIntegrationDataflowsResponse";
import { CoreWeaveCloudLogsIntegrationDataflowRequest } from "./CoreWeaveCloudLogsIntegrationDataflowRequest";
import { CoreWeaveCloudLogsIntegrationDataflowResponse } from "./CoreWeaveCloudLogsIntegrationDataflowResponse";
import { CoreWeaveCloudMetricsIntegrationDataflowRequest } from "./CoreWeaveCloudMetricsIntegrationDataflowRequest";
import { CoreWeaveCloudMetricsIntegrationDataflowResponse } from "./CoreWeaveCloudMetricsIntegrationDataflowResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CoreWeaveCloudIntegrationAccountAPITokenAuthType: ["coreweave_api_token"],
    IntegrationAccountType: ["integration-account"],
  },
  oneOfMap: {
    CoreWeaveCloudIntegrationAccountAuthenticationRequest: [
      "CoreWeaveCloudIntegrationAccountAPITokenAuthRequest",
    ],
    CoreWeaveCloudIntegrationAccountAuthenticationResponse: [
      "CoreWeaveCloudIntegrationAccountAPITokenAuthResponse",
    ],
    CoreWeaveCloudIntegrationAccountAuthenticationUpdate: [
      "CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CoreWeaveCloudIntegrationAccountAPITokenAuthRequest:
      CoreWeaveCloudIntegrationAccountAPITokenAuthRequest,
    CoreWeaveCloudIntegrationAccountAPITokenAuthResponse:
      CoreWeaveCloudIntegrationAccountAPITokenAuthResponse,
    CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate:
      CoreWeaveCloudIntegrationAccountAPITokenAuthUpdate,
    CoreWeaveCloudIntegrationAccountCreateAttributes:
      CoreWeaveCloudIntegrationAccountCreateAttributes,
    CoreWeaveCloudIntegrationAccountCreateData:
      CoreWeaveCloudIntegrationAccountCreateData,
    CoreWeaveCloudIntegrationAccountCreateRequest:
      CoreWeaveCloudIntegrationAccountCreateRequest,
    CoreWeaveCloudIntegrationAccountResponse:
      CoreWeaveCloudIntegrationAccountResponse,
    CoreWeaveCloudIntegrationAccountResponseAttributes:
      CoreWeaveCloudIntegrationAccountResponseAttributes,
    CoreWeaveCloudIntegrationAccountResponseData:
      CoreWeaveCloudIntegrationAccountResponseData,
    CoreWeaveCloudIntegrationAccountSettingsRequest:
      CoreWeaveCloudIntegrationAccountSettingsRequest,
    CoreWeaveCloudIntegrationAccountSettingsResponse:
      CoreWeaveCloudIntegrationAccountSettingsResponse,
    CoreWeaveCloudIntegrationAccountSettingsUpdate:
      CoreWeaveCloudIntegrationAccountSettingsUpdate,
    CoreWeaveCloudIntegrationAccountUpdateAttributes:
      CoreWeaveCloudIntegrationAccountUpdateAttributes,
    CoreWeaveCloudIntegrationAccountUpdateData:
      CoreWeaveCloudIntegrationAccountUpdateData,
    CoreWeaveCloudIntegrationAccountUpdateRequest:
      CoreWeaveCloudIntegrationAccountUpdateRequest,
    CoreWeaveCloudIntegrationAccountsResponse:
      CoreWeaveCloudIntegrationAccountsResponse,
    CoreWeaveCloudIntegrationDataflowsRequest:
      CoreWeaveCloudIntegrationDataflowsRequest,
    CoreWeaveCloudIntegrationDataflowsResponse:
      CoreWeaveCloudIntegrationDataflowsResponse,
    CoreWeaveCloudLogsIntegrationDataflowRequest:
      CoreWeaveCloudLogsIntegrationDataflowRequest,
    CoreWeaveCloudLogsIntegrationDataflowResponse:
      CoreWeaveCloudLogsIntegrationDataflowResponse,
    CoreWeaveCloudMetricsIntegrationDataflowRequest:
      CoreWeaveCloudMetricsIntegrationDataflowRequest,
    CoreWeaveCloudMetricsIntegrationDataflowResponse:
      CoreWeaveCloudMetricsIntegrationDataflowResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
