import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { OpenAICodexDoraIntegrationDataflowRequest } from "./OpenAICodexDoraIntegrationDataflowRequest";
import { OpenAICodexDoraIntegrationDataflowResponse } from "./OpenAICodexDoraIntegrationDataflowResponse";
import { OpenAICodexIntegrationAccountBearerTokenAuthRequest } from "./OpenAICodexIntegrationAccountBearerTokenAuthRequest";
import { OpenAICodexIntegrationAccountBearerTokenAuthResponse } from "./OpenAICodexIntegrationAccountBearerTokenAuthResponse";
import { OpenAICodexIntegrationAccountBearerTokenAuthUpdate } from "./OpenAICodexIntegrationAccountBearerTokenAuthUpdate";
import { OpenAICodexIntegrationAccountCreateAttributes } from "./OpenAICodexIntegrationAccountCreateAttributes";
import { OpenAICodexIntegrationAccountCreateData } from "./OpenAICodexIntegrationAccountCreateData";
import { OpenAICodexIntegrationAccountCreateRequest } from "./OpenAICodexIntegrationAccountCreateRequest";
import { OpenAICodexIntegrationAccountResponse } from "./OpenAICodexIntegrationAccountResponse";
import { OpenAICodexIntegrationAccountResponseAttributes } from "./OpenAICodexIntegrationAccountResponseAttributes";
import { OpenAICodexIntegrationAccountResponseData } from "./OpenAICodexIntegrationAccountResponseData";
import { OpenAICodexIntegrationAccountSettingsRequest } from "./OpenAICodexIntegrationAccountSettingsRequest";
import { OpenAICodexIntegrationAccountSettingsResponse } from "./OpenAICodexIntegrationAccountSettingsResponse";
import { OpenAICodexIntegrationAccountSettingsUpdate } from "./OpenAICodexIntegrationAccountSettingsUpdate";
import { OpenAICodexIntegrationAccountUpdateAttributes } from "./OpenAICodexIntegrationAccountUpdateAttributes";
import { OpenAICodexIntegrationAccountUpdateData } from "./OpenAICodexIntegrationAccountUpdateData";
import { OpenAICodexIntegrationAccountUpdateRequest } from "./OpenAICodexIntegrationAccountUpdateRequest";
import { OpenAICodexIntegrationAccountsResponse } from "./OpenAICodexIntegrationAccountsResponse";
import { OpenAICodexIntegrationDataflowsRequest } from "./OpenAICodexIntegrationDataflowsRequest";
import { OpenAICodexIntegrationDataflowsResponse } from "./OpenAICodexIntegrationDataflowsResponse";
import { OpenAICodexMetricsIntegrationDataflowResponse } from "./OpenAICodexMetricsIntegrationDataflowResponse";
import { OpenAICodexTurnMetricsIntegrationDataflowRequest } from "./OpenAICodexTurnMetricsIntegrationDataflowRequest";
import { OpenAICodexTurnMetricsIntegrationDataflowResponse } from "./OpenAICodexTurnMetricsIntegrationDataflowResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
    OpenAICodexIntegrationAccountBearerTokenAuthType: ["bearer_token"],
  },
  oneOfMap: {
    OpenAICodexIntegrationAccountAuthenticationRequest: [
      "OpenAICodexIntegrationAccountBearerTokenAuthRequest",
    ],
    OpenAICodexIntegrationAccountAuthenticationResponse: [
      "OpenAICodexIntegrationAccountBearerTokenAuthResponse",
    ],
    OpenAICodexIntegrationAccountAuthenticationUpdate: [
      "OpenAICodexIntegrationAccountBearerTokenAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    OpenAICodexDoraIntegrationDataflowRequest:
      OpenAICodexDoraIntegrationDataflowRequest,
    OpenAICodexDoraIntegrationDataflowResponse:
      OpenAICodexDoraIntegrationDataflowResponse,
    OpenAICodexIntegrationAccountBearerTokenAuthRequest:
      OpenAICodexIntegrationAccountBearerTokenAuthRequest,
    OpenAICodexIntegrationAccountBearerTokenAuthResponse:
      OpenAICodexIntegrationAccountBearerTokenAuthResponse,
    OpenAICodexIntegrationAccountBearerTokenAuthUpdate:
      OpenAICodexIntegrationAccountBearerTokenAuthUpdate,
    OpenAICodexIntegrationAccountCreateAttributes:
      OpenAICodexIntegrationAccountCreateAttributes,
    OpenAICodexIntegrationAccountCreateData:
      OpenAICodexIntegrationAccountCreateData,
    OpenAICodexIntegrationAccountCreateRequest:
      OpenAICodexIntegrationAccountCreateRequest,
    OpenAICodexIntegrationAccountResponse:
      OpenAICodexIntegrationAccountResponse,
    OpenAICodexIntegrationAccountResponseAttributes:
      OpenAICodexIntegrationAccountResponseAttributes,
    OpenAICodexIntegrationAccountResponseData:
      OpenAICodexIntegrationAccountResponseData,
    OpenAICodexIntegrationAccountSettingsRequest:
      OpenAICodexIntegrationAccountSettingsRequest,
    OpenAICodexIntegrationAccountSettingsResponse:
      OpenAICodexIntegrationAccountSettingsResponse,
    OpenAICodexIntegrationAccountSettingsUpdate:
      OpenAICodexIntegrationAccountSettingsUpdate,
    OpenAICodexIntegrationAccountUpdateAttributes:
      OpenAICodexIntegrationAccountUpdateAttributes,
    OpenAICodexIntegrationAccountUpdateData:
      OpenAICodexIntegrationAccountUpdateData,
    OpenAICodexIntegrationAccountUpdateRequest:
      OpenAICodexIntegrationAccountUpdateRequest,
    OpenAICodexIntegrationAccountsResponse:
      OpenAICodexIntegrationAccountsResponse,
    OpenAICodexIntegrationDataflowsRequest:
      OpenAICodexIntegrationDataflowsRequest,
    OpenAICodexIntegrationDataflowsResponse:
      OpenAICodexIntegrationDataflowsResponse,
    OpenAICodexMetricsIntegrationDataflowResponse:
      OpenAICodexMetricsIntegrationDataflowResponse,
    OpenAICodexTurnMetricsIntegrationDataflowRequest:
      OpenAICodexTurnMetricsIntegrationDataflowRequest,
    OpenAICodexTurnMetricsIntegrationDataflowResponse:
      OpenAICodexTurnMetricsIntegrationDataflowResponse,
  },
};
