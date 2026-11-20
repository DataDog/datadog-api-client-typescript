import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthRequest } from "./OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthRequest";
import { OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthResponse } from "./OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthResponse";
import { OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthUpdate } from "./OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthUpdate";
import { OpenAILLMEvaluationsIntegrationAccountCreateAttributes } from "./OpenAILLMEvaluationsIntegrationAccountCreateAttributes";
import { OpenAILLMEvaluationsIntegrationAccountCreateData } from "./OpenAILLMEvaluationsIntegrationAccountCreateData";
import { OpenAILLMEvaluationsIntegrationAccountCreateRequest } from "./OpenAILLMEvaluationsIntegrationAccountCreateRequest";
import { OpenAILLMEvaluationsIntegrationAccountResponse } from "./OpenAILLMEvaluationsIntegrationAccountResponse";
import { OpenAILLMEvaluationsIntegrationAccountResponseAttributes } from "./OpenAILLMEvaluationsIntegrationAccountResponseAttributes";
import { OpenAILLMEvaluationsIntegrationAccountResponseData } from "./OpenAILLMEvaluationsIntegrationAccountResponseData";
import { OpenAILLMEvaluationsIntegrationAccountSettingsRequest } from "./OpenAILLMEvaluationsIntegrationAccountSettingsRequest";
import { OpenAILLMEvaluationsIntegrationAccountSettingsResponse } from "./OpenAILLMEvaluationsIntegrationAccountSettingsResponse";
import { OpenAILLMEvaluationsIntegrationAccountSettingsUpdate } from "./OpenAILLMEvaluationsIntegrationAccountSettingsUpdate";
import { OpenAILLMEvaluationsIntegrationAccountUpdateAttributes } from "./OpenAILLMEvaluationsIntegrationAccountUpdateAttributes";
import { OpenAILLMEvaluationsIntegrationAccountUpdateData } from "./OpenAILLMEvaluationsIntegrationAccountUpdateData";
import { OpenAILLMEvaluationsIntegrationAccountUpdateRequest } from "./OpenAILLMEvaluationsIntegrationAccountUpdateRequest";
import { OpenAILLMEvaluationsIntegrationAccountsResponse } from "./OpenAILLMEvaluationsIntegrationAccountsResponse";
import { OpenAILLMEvaluationsIntegrationDataflowsRequest } from "./OpenAILLMEvaluationsIntegrationDataflowsRequest";
import { OpenAILLMEvaluationsIntegrationDataflowsResponse } from "./OpenAILLMEvaluationsIntegrationDataflowsResponse";
import { OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowRequest } from "./OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowRequest";
import { OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowResponse } from "./OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowResponse";
import { OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowRequest } from "./OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowRequest";
import { OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowResponse } from "./OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
    OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthType: ["bearer_token"],
  },
  oneOfMap: {
    OpenAILLMEvaluationsIntegrationAccountAuthenticationRequest: [
      "OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthRequest",
    ],
    OpenAILLMEvaluationsIntegrationAccountAuthenticationResponse: [
      "OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthResponse",
    ],
    OpenAILLMEvaluationsIntegrationAccountAuthenticationUpdate: [
      "OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthRequest:
      OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthRequest,
    OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthResponse:
      OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthResponse,
    OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthUpdate:
      OpenAILLMEvaluationsIntegrationAccountBearerTokenAuthUpdate,
    OpenAILLMEvaluationsIntegrationAccountCreateAttributes:
      OpenAILLMEvaluationsIntegrationAccountCreateAttributes,
    OpenAILLMEvaluationsIntegrationAccountCreateData:
      OpenAILLMEvaluationsIntegrationAccountCreateData,
    OpenAILLMEvaluationsIntegrationAccountCreateRequest:
      OpenAILLMEvaluationsIntegrationAccountCreateRequest,
    OpenAILLMEvaluationsIntegrationAccountResponse:
      OpenAILLMEvaluationsIntegrationAccountResponse,
    OpenAILLMEvaluationsIntegrationAccountResponseAttributes:
      OpenAILLMEvaluationsIntegrationAccountResponseAttributes,
    OpenAILLMEvaluationsIntegrationAccountResponseData:
      OpenAILLMEvaluationsIntegrationAccountResponseData,
    OpenAILLMEvaluationsIntegrationAccountSettingsRequest:
      OpenAILLMEvaluationsIntegrationAccountSettingsRequest,
    OpenAILLMEvaluationsIntegrationAccountSettingsResponse:
      OpenAILLMEvaluationsIntegrationAccountSettingsResponse,
    OpenAILLMEvaluationsIntegrationAccountSettingsUpdate:
      OpenAILLMEvaluationsIntegrationAccountSettingsUpdate,
    OpenAILLMEvaluationsIntegrationAccountUpdateAttributes:
      OpenAILLMEvaluationsIntegrationAccountUpdateAttributes,
    OpenAILLMEvaluationsIntegrationAccountUpdateData:
      OpenAILLMEvaluationsIntegrationAccountUpdateData,
    OpenAILLMEvaluationsIntegrationAccountUpdateRequest:
      OpenAILLMEvaluationsIntegrationAccountUpdateRequest,
    OpenAILLMEvaluationsIntegrationAccountsResponse:
      OpenAILLMEvaluationsIntegrationAccountsResponse,
    OpenAILLMEvaluationsIntegrationDataflowsRequest:
      OpenAILLMEvaluationsIntegrationDataflowsRequest,
    OpenAILLMEvaluationsIntegrationDataflowsResponse:
      OpenAILLMEvaluationsIntegrationDataflowsResponse,
    OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowRequest:
      OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowRequest,
    OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowResponse:
      OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowResponse,
    OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowRequest:
      OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowRequest,
    OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowResponse:
      OpenAILLMEvaluationsProjectCloudCostDataIntegrationDataflowResponse,
  },
};
