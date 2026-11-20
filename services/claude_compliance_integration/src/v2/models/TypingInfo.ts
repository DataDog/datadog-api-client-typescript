import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ClaudeComplianceComplianceLogsIntegrationDataflowResponse } from "./ClaudeComplianceComplianceLogsIntegrationDataflowResponse";
import { ClaudeComplianceIntegrationAccountBearerTokenAuthRequest } from "./ClaudeComplianceIntegrationAccountBearerTokenAuthRequest";
import { ClaudeComplianceIntegrationAccountBearerTokenAuthResponse } from "./ClaudeComplianceIntegrationAccountBearerTokenAuthResponse";
import { ClaudeComplianceIntegrationAccountBearerTokenAuthUpdate } from "./ClaudeComplianceIntegrationAccountBearerTokenAuthUpdate";
import { ClaudeComplianceIntegrationAccountCreateAttributes } from "./ClaudeComplianceIntegrationAccountCreateAttributes";
import { ClaudeComplianceIntegrationAccountCreateData } from "./ClaudeComplianceIntegrationAccountCreateData";
import { ClaudeComplianceIntegrationAccountCreateRequest } from "./ClaudeComplianceIntegrationAccountCreateRequest";
import { ClaudeComplianceIntegrationAccountResponse } from "./ClaudeComplianceIntegrationAccountResponse";
import { ClaudeComplianceIntegrationAccountResponseAttributes } from "./ClaudeComplianceIntegrationAccountResponseAttributes";
import { ClaudeComplianceIntegrationAccountResponseData } from "./ClaudeComplianceIntegrationAccountResponseData";
import { ClaudeComplianceIntegrationAccountUpdateAttributes } from "./ClaudeComplianceIntegrationAccountUpdateAttributes";
import { ClaudeComplianceIntegrationAccountUpdateData } from "./ClaudeComplianceIntegrationAccountUpdateData";
import { ClaudeComplianceIntegrationAccountUpdateRequest } from "./ClaudeComplianceIntegrationAccountUpdateRequest";
import { ClaudeComplianceIntegrationAccountsResponse } from "./ClaudeComplianceIntegrationAccountsResponse";
import { ClaudeComplianceIntegrationDataflowsResponse } from "./ClaudeComplianceIntegrationDataflowsResponse";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ClaudeComplianceIntegrationAccountBearerTokenAuthType: ["bearer_token"],
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
  },
  oneOfMap: {
    ClaudeComplianceIntegrationAccountAuthenticationRequest: [
      "ClaudeComplianceIntegrationAccountBearerTokenAuthRequest",
    ],
    ClaudeComplianceIntegrationAccountAuthenticationResponse: [
      "ClaudeComplianceIntegrationAccountBearerTokenAuthResponse",
    ],
    ClaudeComplianceIntegrationAccountAuthenticationUpdate: [
      "ClaudeComplianceIntegrationAccountBearerTokenAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ClaudeComplianceComplianceLogsIntegrationDataflowResponse:
      ClaudeComplianceComplianceLogsIntegrationDataflowResponse,
    ClaudeComplianceIntegrationAccountBearerTokenAuthRequest:
      ClaudeComplianceIntegrationAccountBearerTokenAuthRequest,
    ClaudeComplianceIntegrationAccountBearerTokenAuthResponse:
      ClaudeComplianceIntegrationAccountBearerTokenAuthResponse,
    ClaudeComplianceIntegrationAccountBearerTokenAuthUpdate:
      ClaudeComplianceIntegrationAccountBearerTokenAuthUpdate,
    ClaudeComplianceIntegrationAccountCreateAttributes:
      ClaudeComplianceIntegrationAccountCreateAttributes,
    ClaudeComplianceIntegrationAccountCreateData:
      ClaudeComplianceIntegrationAccountCreateData,
    ClaudeComplianceIntegrationAccountCreateRequest:
      ClaudeComplianceIntegrationAccountCreateRequest,
    ClaudeComplianceIntegrationAccountResponse:
      ClaudeComplianceIntegrationAccountResponse,
    ClaudeComplianceIntegrationAccountResponseAttributes:
      ClaudeComplianceIntegrationAccountResponseAttributes,
    ClaudeComplianceIntegrationAccountResponseData:
      ClaudeComplianceIntegrationAccountResponseData,
    ClaudeComplianceIntegrationAccountUpdateAttributes:
      ClaudeComplianceIntegrationAccountUpdateAttributes,
    ClaudeComplianceIntegrationAccountUpdateData:
      ClaudeComplianceIntegrationAccountUpdateData,
    ClaudeComplianceIntegrationAccountUpdateRequest:
      ClaudeComplianceIntegrationAccountUpdateRequest,
    ClaudeComplianceIntegrationAccountsResponse:
      ClaudeComplianceIntegrationAccountsResponse,
    ClaudeComplianceIntegrationDataflowsResponse:
      ClaudeComplianceIntegrationDataflowsResponse,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
