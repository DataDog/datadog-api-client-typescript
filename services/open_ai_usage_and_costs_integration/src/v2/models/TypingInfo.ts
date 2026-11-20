import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { OpenAIUsageAndCostsCloudCostDataIntegrationDataflowRequest } from "./OpenAIUsageAndCostsCloudCostDataIntegrationDataflowRequest";
import { OpenAIUsageAndCostsCloudCostDataIntegrationDataflowResponse } from "./OpenAIUsageAndCostsCloudCostDataIntegrationDataflowResponse";
import { OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthRequest } from "./OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthRequest";
import { OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthResponse } from "./OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthResponse";
import { OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthUpdate } from "./OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthUpdate";
import { OpenAIUsageAndCostsIntegrationAccountCreateAttributes } from "./OpenAIUsageAndCostsIntegrationAccountCreateAttributes";
import { OpenAIUsageAndCostsIntegrationAccountCreateData } from "./OpenAIUsageAndCostsIntegrationAccountCreateData";
import { OpenAIUsageAndCostsIntegrationAccountCreateRequest } from "./OpenAIUsageAndCostsIntegrationAccountCreateRequest";
import { OpenAIUsageAndCostsIntegrationAccountResponse } from "./OpenAIUsageAndCostsIntegrationAccountResponse";
import { OpenAIUsageAndCostsIntegrationAccountResponseAttributes } from "./OpenAIUsageAndCostsIntegrationAccountResponseAttributes";
import { OpenAIUsageAndCostsIntegrationAccountResponseData } from "./OpenAIUsageAndCostsIntegrationAccountResponseData";
import { OpenAIUsageAndCostsIntegrationAccountSettingsRequest } from "./OpenAIUsageAndCostsIntegrationAccountSettingsRequest";
import { OpenAIUsageAndCostsIntegrationAccountSettingsResponse } from "./OpenAIUsageAndCostsIntegrationAccountSettingsResponse";
import { OpenAIUsageAndCostsIntegrationAccountSettingsUpdate } from "./OpenAIUsageAndCostsIntegrationAccountSettingsUpdate";
import { OpenAIUsageAndCostsIntegrationAccountUpdateAttributes } from "./OpenAIUsageAndCostsIntegrationAccountUpdateAttributes";
import { OpenAIUsageAndCostsIntegrationAccountUpdateData } from "./OpenAIUsageAndCostsIntegrationAccountUpdateData";
import { OpenAIUsageAndCostsIntegrationAccountUpdateRequest } from "./OpenAIUsageAndCostsIntegrationAccountUpdateRequest";
import { OpenAIUsageAndCostsIntegrationAccountsResponse } from "./OpenAIUsageAndCostsIntegrationAccountsResponse";
import { OpenAIUsageAndCostsIntegrationDataflowsRequest } from "./OpenAIUsageAndCostsIntegrationDataflowsRequest";
import { OpenAIUsageAndCostsIntegrationDataflowsResponse } from "./OpenAIUsageAndCostsIntegrationDataflowsResponse";
import { OpenAIUsageAndCostsUsageMetricsIntegrationDataflowResponse } from "./OpenAIUsageAndCostsUsageMetricsIntegrationDataflowResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
    OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthType: ["bearer_token"],
  },
  oneOfMap: {
    OpenAIUsageAndCostsIntegrationAccountAuthenticationRequest: [
      "OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthRequest",
    ],
    OpenAIUsageAndCostsIntegrationAccountAuthenticationResponse: [
      "OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthResponse",
    ],
    OpenAIUsageAndCostsIntegrationAccountAuthenticationUpdate: [
      "OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    OpenAIUsageAndCostsCloudCostDataIntegrationDataflowRequest:
      OpenAIUsageAndCostsCloudCostDataIntegrationDataflowRequest,
    OpenAIUsageAndCostsCloudCostDataIntegrationDataflowResponse:
      OpenAIUsageAndCostsCloudCostDataIntegrationDataflowResponse,
    OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthRequest:
      OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthRequest,
    OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthResponse:
      OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthResponse,
    OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthUpdate:
      OpenAIUsageAndCostsIntegrationAccountBearerTokenAuthUpdate,
    OpenAIUsageAndCostsIntegrationAccountCreateAttributes:
      OpenAIUsageAndCostsIntegrationAccountCreateAttributes,
    OpenAIUsageAndCostsIntegrationAccountCreateData:
      OpenAIUsageAndCostsIntegrationAccountCreateData,
    OpenAIUsageAndCostsIntegrationAccountCreateRequest:
      OpenAIUsageAndCostsIntegrationAccountCreateRequest,
    OpenAIUsageAndCostsIntegrationAccountResponse:
      OpenAIUsageAndCostsIntegrationAccountResponse,
    OpenAIUsageAndCostsIntegrationAccountResponseAttributes:
      OpenAIUsageAndCostsIntegrationAccountResponseAttributes,
    OpenAIUsageAndCostsIntegrationAccountResponseData:
      OpenAIUsageAndCostsIntegrationAccountResponseData,
    OpenAIUsageAndCostsIntegrationAccountSettingsRequest:
      OpenAIUsageAndCostsIntegrationAccountSettingsRequest,
    OpenAIUsageAndCostsIntegrationAccountSettingsResponse:
      OpenAIUsageAndCostsIntegrationAccountSettingsResponse,
    OpenAIUsageAndCostsIntegrationAccountSettingsUpdate:
      OpenAIUsageAndCostsIntegrationAccountSettingsUpdate,
    OpenAIUsageAndCostsIntegrationAccountUpdateAttributes:
      OpenAIUsageAndCostsIntegrationAccountUpdateAttributes,
    OpenAIUsageAndCostsIntegrationAccountUpdateData:
      OpenAIUsageAndCostsIntegrationAccountUpdateData,
    OpenAIUsageAndCostsIntegrationAccountUpdateRequest:
      OpenAIUsageAndCostsIntegrationAccountUpdateRequest,
    OpenAIUsageAndCostsIntegrationAccountsResponse:
      OpenAIUsageAndCostsIntegrationAccountsResponse,
    OpenAIUsageAndCostsIntegrationDataflowsRequest:
      OpenAIUsageAndCostsIntegrationDataflowsRequest,
    OpenAIUsageAndCostsIntegrationDataflowsResponse:
      OpenAIUsageAndCostsIntegrationDataflowsResponse,
    OpenAIUsageAndCostsUsageMetricsIntegrationDataflowResponse:
      OpenAIUsageAndCostsUsageMetricsIntegrationDataflowResponse,
  },
};
