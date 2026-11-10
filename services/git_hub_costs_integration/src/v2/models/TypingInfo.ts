import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GitHubCostsCloudCostMetricsIntegrationDataflowResponse } from "./GitHubCostsCloudCostMetricsIntegrationDataflowResponse";
import { GitHubCostsIntegrationAccountBearerTokenAuthRequest } from "./GitHubCostsIntegrationAccountBearerTokenAuthRequest";
import { GitHubCostsIntegrationAccountBearerTokenAuthResponse } from "./GitHubCostsIntegrationAccountBearerTokenAuthResponse";
import { GitHubCostsIntegrationAccountBearerTokenAuthUpdate } from "./GitHubCostsIntegrationAccountBearerTokenAuthUpdate";
import { GitHubCostsIntegrationAccountCreateAttributes } from "./GitHubCostsIntegrationAccountCreateAttributes";
import { GitHubCostsIntegrationAccountCreateData } from "./GitHubCostsIntegrationAccountCreateData";
import { GitHubCostsIntegrationAccountCreateRequest } from "./GitHubCostsIntegrationAccountCreateRequest";
import { GitHubCostsIntegrationAccountResponse } from "./GitHubCostsIntegrationAccountResponse";
import { GitHubCostsIntegrationAccountResponseAttributes } from "./GitHubCostsIntegrationAccountResponseAttributes";
import { GitHubCostsIntegrationAccountResponseData } from "./GitHubCostsIntegrationAccountResponseData";
import { GitHubCostsIntegrationAccountSettingsRequest } from "./GitHubCostsIntegrationAccountSettingsRequest";
import { GitHubCostsIntegrationAccountSettingsResponse } from "./GitHubCostsIntegrationAccountSettingsResponse";
import { GitHubCostsIntegrationAccountSettingsUpdate } from "./GitHubCostsIntegrationAccountSettingsUpdate";
import { GitHubCostsIntegrationAccountUpdateAttributes } from "./GitHubCostsIntegrationAccountUpdateAttributes";
import { GitHubCostsIntegrationAccountUpdateData } from "./GitHubCostsIntegrationAccountUpdateData";
import { GitHubCostsIntegrationAccountUpdateRequest } from "./GitHubCostsIntegrationAccountUpdateRequest";
import { GitHubCostsIntegrationAccountsResponse } from "./GitHubCostsIntegrationAccountsResponse";
import { GitHubCostsIntegrationDataflowsResponse } from "./GitHubCostsIntegrationDataflowsResponse";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    GitHubCostsIntegrationAccountBearerTokenAuthType: ["bearer_token"],
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
  },
  oneOfMap: {
    GitHubCostsIntegrationAccountAuthenticationRequest: [
      "GitHubCostsIntegrationAccountBearerTokenAuthRequest",
    ],
    GitHubCostsIntegrationAccountAuthenticationResponse: [
      "GitHubCostsIntegrationAccountBearerTokenAuthResponse",
    ],
    GitHubCostsIntegrationAccountAuthenticationUpdate: [
      "GitHubCostsIntegrationAccountBearerTokenAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GitHubCostsCloudCostMetricsIntegrationDataflowResponse:
      GitHubCostsCloudCostMetricsIntegrationDataflowResponse,
    GitHubCostsIntegrationAccountBearerTokenAuthRequest:
      GitHubCostsIntegrationAccountBearerTokenAuthRequest,
    GitHubCostsIntegrationAccountBearerTokenAuthResponse:
      GitHubCostsIntegrationAccountBearerTokenAuthResponse,
    GitHubCostsIntegrationAccountBearerTokenAuthUpdate:
      GitHubCostsIntegrationAccountBearerTokenAuthUpdate,
    GitHubCostsIntegrationAccountCreateAttributes:
      GitHubCostsIntegrationAccountCreateAttributes,
    GitHubCostsIntegrationAccountCreateData:
      GitHubCostsIntegrationAccountCreateData,
    GitHubCostsIntegrationAccountCreateRequest:
      GitHubCostsIntegrationAccountCreateRequest,
    GitHubCostsIntegrationAccountResponse:
      GitHubCostsIntegrationAccountResponse,
    GitHubCostsIntegrationAccountResponseAttributes:
      GitHubCostsIntegrationAccountResponseAttributes,
    GitHubCostsIntegrationAccountResponseData:
      GitHubCostsIntegrationAccountResponseData,
    GitHubCostsIntegrationAccountSettingsRequest:
      GitHubCostsIntegrationAccountSettingsRequest,
    GitHubCostsIntegrationAccountSettingsResponse:
      GitHubCostsIntegrationAccountSettingsResponse,
    GitHubCostsIntegrationAccountSettingsUpdate:
      GitHubCostsIntegrationAccountSettingsUpdate,
    GitHubCostsIntegrationAccountUpdateAttributes:
      GitHubCostsIntegrationAccountUpdateAttributes,
    GitHubCostsIntegrationAccountUpdateData:
      GitHubCostsIntegrationAccountUpdateData,
    GitHubCostsIntegrationAccountUpdateRequest:
      GitHubCostsIntegrationAccountUpdateRequest,
    GitHubCostsIntegrationAccountsResponse:
      GitHubCostsIntegrationAccountsResponse,
    GitHubCostsIntegrationDataflowsResponse:
      GitHubCostsIntegrationDataflowsResponse,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
