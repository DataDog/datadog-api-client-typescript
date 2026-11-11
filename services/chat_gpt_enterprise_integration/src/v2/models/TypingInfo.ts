import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest } from "./ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest";
import { ChatGPTEnterpriseAgentConsoleIntegrationDataflowResponse } from "./ChatGPTEnterpriseAgentConsoleIntegrationDataflowResponse";
import { ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest } from "./ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest";
import { ChatGPTEnterpriseCloudCostDataIntegrationDataflowResponse } from "./ChatGPTEnterpriseCloudCostDataIntegrationDataflowResponse";
import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest";
import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse";
import { ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate } from "./ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate";
import { ChatGPTEnterpriseIntegrationAccountCreateAttributes } from "./ChatGPTEnterpriseIntegrationAccountCreateAttributes";
import { ChatGPTEnterpriseIntegrationAccountCreateData } from "./ChatGPTEnterpriseIntegrationAccountCreateData";
import { ChatGPTEnterpriseIntegrationAccountCreateRequest } from "./ChatGPTEnterpriseIntegrationAccountCreateRequest";
import { ChatGPTEnterpriseIntegrationAccountResponse } from "./ChatGPTEnterpriseIntegrationAccountResponse";
import { ChatGPTEnterpriseIntegrationAccountResponseAttributes } from "./ChatGPTEnterpriseIntegrationAccountResponseAttributes";
import { ChatGPTEnterpriseIntegrationAccountResponseData } from "./ChatGPTEnterpriseIntegrationAccountResponseData";
import { ChatGPTEnterpriseIntegrationAccountSettingsRequest } from "./ChatGPTEnterpriseIntegrationAccountSettingsRequest";
import { ChatGPTEnterpriseIntegrationAccountSettingsResponse } from "./ChatGPTEnterpriseIntegrationAccountSettingsResponse";
import { ChatGPTEnterpriseIntegrationAccountSettingsUpdate } from "./ChatGPTEnterpriseIntegrationAccountSettingsUpdate";
import { ChatGPTEnterpriseIntegrationAccountUpdateAttributes } from "./ChatGPTEnterpriseIntegrationAccountUpdateAttributes";
import { ChatGPTEnterpriseIntegrationAccountUpdateData } from "./ChatGPTEnterpriseIntegrationAccountUpdateData";
import { ChatGPTEnterpriseIntegrationAccountUpdateRequest } from "./ChatGPTEnterpriseIntegrationAccountUpdateRequest";
import { ChatGPTEnterpriseIntegrationAccountsResponse } from "./ChatGPTEnterpriseIntegrationAccountsResponse";
import { ChatGPTEnterpriseIntegrationDataflowsRequest } from "./ChatGPTEnterpriseIntegrationDataflowsRequest";
import { ChatGPTEnterpriseIntegrationDataflowsResponse } from "./ChatGPTEnterpriseIntegrationDataflowsResponse";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ChatGPTEnterpriseIntegrationAccountBearerTokenAuthType: ["bearer_token"],
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
  },
  oneOfMap: {
    ChatGPTEnterpriseIntegrationAccountAuthenticationRequest: [
      "ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest",
    ],
    ChatGPTEnterpriseIntegrationAccountAuthenticationResponse: [
      "ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse",
    ],
    ChatGPTEnterpriseIntegrationAccountAuthenticationUpdate: [
      "ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest:
      ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest,
    ChatGPTEnterpriseAgentConsoleIntegrationDataflowResponse:
      ChatGPTEnterpriseAgentConsoleIntegrationDataflowResponse,
    ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest:
      ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest,
    ChatGPTEnterpriseCloudCostDataIntegrationDataflowResponse:
      ChatGPTEnterpriseCloudCostDataIntegrationDataflowResponse,
    ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest:
      ChatGPTEnterpriseIntegrationAccountBearerTokenAuthRequest,
    ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse:
      ChatGPTEnterpriseIntegrationAccountBearerTokenAuthResponse,
    ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate:
      ChatGPTEnterpriseIntegrationAccountBearerTokenAuthUpdate,
    ChatGPTEnterpriseIntegrationAccountCreateAttributes:
      ChatGPTEnterpriseIntegrationAccountCreateAttributes,
    ChatGPTEnterpriseIntegrationAccountCreateData:
      ChatGPTEnterpriseIntegrationAccountCreateData,
    ChatGPTEnterpriseIntegrationAccountCreateRequest:
      ChatGPTEnterpriseIntegrationAccountCreateRequest,
    ChatGPTEnterpriseIntegrationAccountResponse:
      ChatGPTEnterpriseIntegrationAccountResponse,
    ChatGPTEnterpriseIntegrationAccountResponseAttributes:
      ChatGPTEnterpriseIntegrationAccountResponseAttributes,
    ChatGPTEnterpriseIntegrationAccountResponseData:
      ChatGPTEnterpriseIntegrationAccountResponseData,
    ChatGPTEnterpriseIntegrationAccountSettingsRequest:
      ChatGPTEnterpriseIntegrationAccountSettingsRequest,
    ChatGPTEnterpriseIntegrationAccountSettingsResponse:
      ChatGPTEnterpriseIntegrationAccountSettingsResponse,
    ChatGPTEnterpriseIntegrationAccountSettingsUpdate:
      ChatGPTEnterpriseIntegrationAccountSettingsUpdate,
    ChatGPTEnterpriseIntegrationAccountUpdateAttributes:
      ChatGPTEnterpriseIntegrationAccountUpdateAttributes,
    ChatGPTEnterpriseIntegrationAccountUpdateData:
      ChatGPTEnterpriseIntegrationAccountUpdateData,
    ChatGPTEnterpriseIntegrationAccountUpdateRequest:
      ChatGPTEnterpriseIntegrationAccountUpdateRequest,
    ChatGPTEnterpriseIntegrationAccountsResponse:
      ChatGPTEnterpriseIntegrationAccountsResponse,
    ChatGPTEnterpriseIntegrationDataflowsRequest:
      ChatGPTEnterpriseIntegrationDataflowsRequest,
    ChatGPTEnterpriseIntegrationDataflowsResponse:
      ChatGPTEnterpriseIntegrationDataflowsResponse,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
