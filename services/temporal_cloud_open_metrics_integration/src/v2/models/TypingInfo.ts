import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest } from "./TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest";
import { TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse } from "./TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse";
import { TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate } from "./TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate";
import { TemporalCloudOpenMetricsIntegrationAccountCreateAttributes } from "./TemporalCloudOpenMetricsIntegrationAccountCreateAttributes";
import { TemporalCloudOpenMetricsIntegrationAccountCreateData } from "./TemporalCloudOpenMetricsIntegrationAccountCreateData";
import { TemporalCloudOpenMetricsIntegrationAccountCreateRequest } from "./TemporalCloudOpenMetricsIntegrationAccountCreateRequest";
import { TemporalCloudOpenMetricsIntegrationAccountResponse } from "./TemporalCloudOpenMetricsIntegrationAccountResponse";
import { TemporalCloudOpenMetricsIntegrationAccountResponseAttributes } from "./TemporalCloudOpenMetricsIntegrationAccountResponseAttributes";
import { TemporalCloudOpenMetricsIntegrationAccountResponseData } from "./TemporalCloudOpenMetricsIntegrationAccountResponseData";
import { TemporalCloudOpenMetricsIntegrationAccountSettingsRequest } from "./TemporalCloudOpenMetricsIntegrationAccountSettingsRequest";
import { TemporalCloudOpenMetricsIntegrationAccountSettingsResponse } from "./TemporalCloudOpenMetricsIntegrationAccountSettingsResponse";
import { TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate } from "./TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate";
import { TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes } from "./TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes";
import { TemporalCloudOpenMetricsIntegrationAccountUpdateData } from "./TemporalCloudOpenMetricsIntegrationAccountUpdateData";
import { TemporalCloudOpenMetricsIntegrationAccountUpdateRequest } from "./TemporalCloudOpenMetricsIntegrationAccountUpdateRequest";
import { TemporalCloudOpenMetricsIntegrationAccountsResponse } from "./TemporalCloudOpenMetricsIntegrationAccountsResponse";
import { TemporalCloudOpenMetricsIntegrationDataflowsResponse } from "./TemporalCloudOpenMetricsIntegrationDataflowsResponse";
import { TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse } from "./TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
    TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthType: [
      "bearer_token",
    ],
  },
  oneOfMap: {
    TemporalCloudOpenMetricsIntegrationAccountAuthenticationRequest: [
      "TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest",
    ],
    TemporalCloudOpenMetricsIntegrationAccountAuthenticationResponse: [
      "TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse",
    ],
    TemporalCloudOpenMetricsIntegrationAccountAuthenticationUpdate: [
      "TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest:
      TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthRequest,
    TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse:
      TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthResponse,
    TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate:
      TemporalCloudOpenMetricsIntegrationAccountBearerTokenAuthUpdate,
    TemporalCloudOpenMetricsIntegrationAccountCreateAttributes:
      TemporalCloudOpenMetricsIntegrationAccountCreateAttributes,
    TemporalCloudOpenMetricsIntegrationAccountCreateData:
      TemporalCloudOpenMetricsIntegrationAccountCreateData,
    TemporalCloudOpenMetricsIntegrationAccountCreateRequest:
      TemporalCloudOpenMetricsIntegrationAccountCreateRequest,
    TemporalCloudOpenMetricsIntegrationAccountResponse:
      TemporalCloudOpenMetricsIntegrationAccountResponse,
    TemporalCloudOpenMetricsIntegrationAccountResponseAttributes:
      TemporalCloudOpenMetricsIntegrationAccountResponseAttributes,
    TemporalCloudOpenMetricsIntegrationAccountResponseData:
      TemporalCloudOpenMetricsIntegrationAccountResponseData,
    TemporalCloudOpenMetricsIntegrationAccountSettingsRequest:
      TemporalCloudOpenMetricsIntegrationAccountSettingsRequest,
    TemporalCloudOpenMetricsIntegrationAccountSettingsResponse:
      TemporalCloudOpenMetricsIntegrationAccountSettingsResponse,
    TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate:
      TemporalCloudOpenMetricsIntegrationAccountSettingsUpdate,
    TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes:
      TemporalCloudOpenMetricsIntegrationAccountUpdateAttributes,
    TemporalCloudOpenMetricsIntegrationAccountUpdateData:
      TemporalCloudOpenMetricsIntegrationAccountUpdateData,
    TemporalCloudOpenMetricsIntegrationAccountUpdateRequest:
      TemporalCloudOpenMetricsIntegrationAccountUpdateRequest,
    TemporalCloudOpenMetricsIntegrationAccountsResponse:
      TemporalCloudOpenMetricsIntegrationAccountsResponse,
    TemporalCloudOpenMetricsIntegrationDataflowsResponse:
      TemporalCloudOpenMetricsIntegrationDataflowsResponse,
    TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse:
      TemporalCloudOpenMetricsMetricsIntegrationDataflowResponse,
  },
};
