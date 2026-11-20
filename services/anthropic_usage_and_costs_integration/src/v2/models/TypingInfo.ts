import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowRequest } from "./AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowRequest";
import { AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowResponse } from "./AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowResponse";
import { AnthropicUsageAndCostsDailyUsageDoraMetricsIntegrationDataflowResponse } from "./AnthropicUsageAndCostsDailyUsageDoraMetricsIntegrationDataflowResponse";
import { AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthRequest } from "./AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthRequest";
import { AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthResponse } from "./AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthResponse";
import { AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthUpdate } from "./AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthUpdate";
import { AnthropicUsageAndCostsIntegrationAccountCreateAttributes } from "./AnthropicUsageAndCostsIntegrationAccountCreateAttributes";
import { AnthropicUsageAndCostsIntegrationAccountCreateData } from "./AnthropicUsageAndCostsIntegrationAccountCreateData";
import { AnthropicUsageAndCostsIntegrationAccountCreateRequest } from "./AnthropicUsageAndCostsIntegrationAccountCreateRequest";
import { AnthropicUsageAndCostsIntegrationAccountResponse } from "./AnthropicUsageAndCostsIntegrationAccountResponse";
import { AnthropicUsageAndCostsIntegrationAccountResponseAttributes } from "./AnthropicUsageAndCostsIntegrationAccountResponseAttributes";
import { AnthropicUsageAndCostsIntegrationAccountResponseData } from "./AnthropicUsageAndCostsIntegrationAccountResponseData";
import { AnthropicUsageAndCostsIntegrationAccountUpdateAttributes } from "./AnthropicUsageAndCostsIntegrationAccountUpdateAttributes";
import { AnthropicUsageAndCostsIntegrationAccountUpdateData } from "./AnthropicUsageAndCostsIntegrationAccountUpdateData";
import { AnthropicUsageAndCostsIntegrationAccountUpdateRequest } from "./AnthropicUsageAndCostsIntegrationAccountUpdateRequest";
import { AnthropicUsageAndCostsIntegrationAccountsResponse } from "./AnthropicUsageAndCostsIntegrationAccountsResponse";
import { AnthropicUsageAndCostsIntegrationDataflowsRequest } from "./AnthropicUsageAndCostsIntegrationDataflowsRequest";
import { AnthropicUsageAndCostsIntegrationDataflowsResponse } from "./AnthropicUsageAndCostsIntegrationDataflowsResponse";
import { AnthropicUsageAndCostsUsageMetricsIntegrationDataflowResponse } from "./AnthropicUsageAndCostsUsageMetricsIntegrationDataflowResponse";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthType: [
      "bearer_token",
    ],
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
  },
  oneOfMap: {
    AnthropicUsageAndCostsIntegrationAccountAuthenticationRequest: [
      "AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthRequest",
    ],
    AnthropicUsageAndCostsIntegrationAccountAuthenticationResponse: [
      "AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthResponse",
    ],
    AnthropicUsageAndCostsIntegrationAccountAuthenticationUpdate: [
      "AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowRequest:
      AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowRequest,
    AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowResponse:
      AnthropicUsageAndCostsCloudCostMetricsIntegrationDataflowResponse,
    AnthropicUsageAndCostsDailyUsageDoraMetricsIntegrationDataflowResponse:
      AnthropicUsageAndCostsDailyUsageDoraMetricsIntegrationDataflowResponse,
    AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthRequest:
      AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthRequest,
    AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthResponse:
      AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthResponse,
    AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthUpdate:
      AnthropicUsageAndCostsIntegrationAccountBearerTokenAuthUpdate,
    AnthropicUsageAndCostsIntegrationAccountCreateAttributes:
      AnthropicUsageAndCostsIntegrationAccountCreateAttributes,
    AnthropicUsageAndCostsIntegrationAccountCreateData:
      AnthropicUsageAndCostsIntegrationAccountCreateData,
    AnthropicUsageAndCostsIntegrationAccountCreateRequest:
      AnthropicUsageAndCostsIntegrationAccountCreateRequest,
    AnthropicUsageAndCostsIntegrationAccountResponse:
      AnthropicUsageAndCostsIntegrationAccountResponse,
    AnthropicUsageAndCostsIntegrationAccountResponseAttributes:
      AnthropicUsageAndCostsIntegrationAccountResponseAttributes,
    AnthropicUsageAndCostsIntegrationAccountResponseData:
      AnthropicUsageAndCostsIntegrationAccountResponseData,
    AnthropicUsageAndCostsIntegrationAccountUpdateAttributes:
      AnthropicUsageAndCostsIntegrationAccountUpdateAttributes,
    AnthropicUsageAndCostsIntegrationAccountUpdateData:
      AnthropicUsageAndCostsIntegrationAccountUpdateData,
    AnthropicUsageAndCostsIntegrationAccountUpdateRequest:
      AnthropicUsageAndCostsIntegrationAccountUpdateRequest,
    AnthropicUsageAndCostsIntegrationAccountsResponse:
      AnthropicUsageAndCostsIntegrationAccountsResponse,
    AnthropicUsageAndCostsIntegrationDataflowsRequest:
      AnthropicUsageAndCostsIntegrationDataflowsRequest,
    AnthropicUsageAndCostsIntegrationDataflowsResponse:
      AnthropicUsageAndCostsIntegrationDataflowsResponse,
    AnthropicUsageAndCostsUsageMetricsIntegrationDataflowResponse:
      AnthropicUsageAndCostsUsageMetricsIntegrationDataflowResponse,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
