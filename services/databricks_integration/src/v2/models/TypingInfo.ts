import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DatabricksCloudCostMetricsIntegrationDataflowRequest } from "./DatabricksCloudCostMetricsIntegrationDataflowRequest";
import { DatabricksCloudCostMetricsIntegrationDataflowResponse } from "./DatabricksCloudCostMetricsIntegrationDataflowResponse";
import { DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest } from "./DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest";
import { DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse } from "./DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse";
import { DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest } from "./DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest";
import { DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse } from "./DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse";
import { DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest } from "./DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest";
import { DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse } from "./DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse";
import { DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest } from "./DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest";
import { DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse } from "./DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse";
import { DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest } from "./DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest";
import { DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse } from "./DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse";
import { DatabricksIntegrationAccountBearerTokenAuthRequest } from "./DatabricksIntegrationAccountBearerTokenAuthRequest";
import { DatabricksIntegrationAccountBearerTokenAuthResponse } from "./DatabricksIntegrationAccountBearerTokenAuthResponse";
import { DatabricksIntegrationAccountBearerTokenAuthUpdate } from "./DatabricksIntegrationAccountBearerTokenAuthUpdate";
import { DatabricksIntegrationAccountCreateAttributes } from "./DatabricksIntegrationAccountCreateAttributes";
import { DatabricksIntegrationAccountCreateData } from "./DatabricksIntegrationAccountCreateData";
import { DatabricksIntegrationAccountCreateRequest } from "./DatabricksIntegrationAccountCreateRequest";
import { DatabricksIntegrationAccountOAuthAuthRequest } from "./DatabricksIntegrationAccountOAuthAuthRequest";
import { DatabricksIntegrationAccountOAuthAuthResponse } from "./DatabricksIntegrationAccountOAuthAuthResponse";
import { DatabricksIntegrationAccountOAuthAuthUpdate } from "./DatabricksIntegrationAccountOAuthAuthUpdate";
import { DatabricksIntegrationAccountPrivateActionRunnerAuthRequest } from "./DatabricksIntegrationAccountPrivateActionRunnerAuthRequest";
import { DatabricksIntegrationAccountPrivateActionRunnerAuthResponse } from "./DatabricksIntegrationAccountPrivateActionRunnerAuthResponse";
import { DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate } from "./DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate";
import { DatabricksIntegrationAccountResponse } from "./DatabricksIntegrationAccountResponse";
import { DatabricksIntegrationAccountResponseAttributes } from "./DatabricksIntegrationAccountResponseAttributes";
import { DatabricksIntegrationAccountResponseData } from "./DatabricksIntegrationAccountResponseData";
import { DatabricksIntegrationAccountSettingsRequest } from "./DatabricksIntegrationAccountSettingsRequest";
import { DatabricksIntegrationAccountSettingsResponse } from "./DatabricksIntegrationAccountSettingsResponse";
import { DatabricksIntegrationAccountSettingsUpdate } from "./DatabricksIntegrationAccountSettingsUpdate";
import { DatabricksIntegrationAccountUpdateAttributes } from "./DatabricksIntegrationAccountUpdateAttributes";
import { DatabricksIntegrationAccountUpdateData } from "./DatabricksIntegrationAccountUpdateData";
import { DatabricksIntegrationAccountUpdateRequest } from "./DatabricksIntegrationAccountUpdateRequest";
import { DatabricksIntegrationAccountsResponse } from "./DatabricksIntegrationAccountsResponse";
import { DatabricksIntegrationDataflowsRequest } from "./DatabricksIntegrationDataflowsRequest";
import { DatabricksIntegrationDataflowsResponse } from "./DatabricksIntegrationDataflowsResponse";
import { DatabricksModelServingMetricsIntegrationDataflowRequest } from "./DatabricksModelServingMetricsIntegrationDataflowRequest";
import { DatabricksModelServingMetricsIntegrationDataflowResponse } from "./DatabricksModelServingMetricsIntegrationDataflowResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DatabricksIntegrationAccountBearerTokenAuthType: ["bearer_token"],
    DatabricksIntegrationAccountOAuthAuthType: ["databricks_oauth"],
    DatabricksIntegrationAccountPrivateActionRunnerAuthType: [
      "private_action_runner",
    ],
    IntegrationAccountType: ["integration-account"],
  },
  oneOfMap: {
    DatabricksIntegrationAccountAuthenticationRequest: [
      "DatabricksIntegrationAccountOAuthAuthRequest",
      "DatabricksIntegrationAccountPrivateActionRunnerAuthRequest",
      "DatabricksIntegrationAccountBearerTokenAuthRequest",
    ],
    DatabricksIntegrationAccountAuthenticationResponse: [
      "DatabricksIntegrationAccountOAuthAuthResponse",
      "DatabricksIntegrationAccountPrivateActionRunnerAuthResponse",
      "DatabricksIntegrationAccountBearerTokenAuthResponse",
    ],
    DatabricksIntegrationAccountAuthenticationUpdate: [
      "DatabricksIntegrationAccountOAuthAuthUpdate",
      "DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate",
      "DatabricksIntegrationAccountBearerTokenAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DatabricksCloudCostMetricsIntegrationDataflowRequest:
      DatabricksCloudCostMetricsIntegrationDataflowRequest,
    DatabricksCloudCostMetricsIntegrationDataflowResponse:
      DatabricksCloudCostMetricsIntegrationDataflowResponse,
    DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest:
      DatabricksCloudCostMetricsIntegrationDataflowSettingsRequest,
    DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse:
      DatabricksCloudCostMetricsIntegrationDataflowSettingsResponse,
    DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest:
      DatabricksDataObservabilityJobsMonitoringIntegrationDataflowRequest,
    DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse:
      DatabricksDataObservabilityJobsMonitoringIntegrationDataflowResponse,
    DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest:
      DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsRequest,
    DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse:
      DatabricksDataObservabilityJobsMonitoringIntegrationDataflowSettingsResponse,
    DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest:
      DatabricksDataObservabilityQualityMonitoringIntegrationDataflowRequest,
    DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse:
      DatabricksDataObservabilityQualityMonitoringIntegrationDataflowResponse,
    DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest:
      DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest,
    DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse:
      DatabricksDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse,
    DatabricksIntegrationAccountBearerTokenAuthRequest:
      DatabricksIntegrationAccountBearerTokenAuthRequest,
    DatabricksIntegrationAccountBearerTokenAuthResponse:
      DatabricksIntegrationAccountBearerTokenAuthResponse,
    DatabricksIntegrationAccountBearerTokenAuthUpdate:
      DatabricksIntegrationAccountBearerTokenAuthUpdate,
    DatabricksIntegrationAccountCreateAttributes:
      DatabricksIntegrationAccountCreateAttributes,
    DatabricksIntegrationAccountCreateData:
      DatabricksIntegrationAccountCreateData,
    DatabricksIntegrationAccountCreateRequest:
      DatabricksIntegrationAccountCreateRequest,
    DatabricksIntegrationAccountOAuthAuthRequest:
      DatabricksIntegrationAccountOAuthAuthRequest,
    DatabricksIntegrationAccountOAuthAuthResponse:
      DatabricksIntegrationAccountOAuthAuthResponse,
    DatabricksIntegrationAccountOAuthAuthUpdate:
      DatabricksIntegrationAccountOAuthAuthUpdate,
    DatabricksIntegrationAccountPrivateActionRunnerAuthRequest:
      DatabricksIntegrationAccountPrivateActionRunnerAuthRequest,
    DatabricksIntegrationAccountPrivateActionRunnerAuthResponse:
      DatabricksIntegrationAccountPrivateActionRunnerAuthResponse,
    DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate:
      DatabricksIntegrationAccountPrivateActionRunnerAuthUpdate,
    DatabricksIntegrationAccountResponse: DatabricksIntegrationAccountResponse,
    DatabricksIntegrationAccountResponseAttributes:
      DatabricksIntegrationAccountResponseAttributes,
    DatabricksIntegrationAccountResponseData:
      DatabricksIntegrationAccountResponseData,
    DatabricksIntegrationAccountSettingsRequest:
      DatabricksIntegrationAccountSettingsRequest,
    DatabricksIntegrationAccountSettingsResponse:
      DatabricksIntegrationAccountSettingsResponse,
    DatabricksIntegrationAccountSettingsUpdate:
      DatabricksIntegrationAccountSettingsUpdate,
    DatabricksIntegrationAccountUpdateAttributes:
      DatabricksIntegrationAccountUpdateAttributes,
    DatabricksIntegrationAccountUpdateData:
      DatabricksIntegrationAccountUpdateData,
    DatabricksIntegrationAccountUpdateRequest:
      DatabricksIntegrationAccountUpdateRequest,
    DatabricksIntegrationAccountsResponse:
      DatabricksIntegrationAccountsResponse,
    DatabricksIntegrationDataflowsRequest:
      DatabricksIntegrationDataflowsRequest,
    DatabricksIntegrationDataflowsResponse:
      DatabricksIntegrationDataflowsResponse,
    DatabricksModelServingMetricsIntegrationDataflowRequest:
      DatabricksModelServingMetricsIntegrationDataflowRequest,
    DatabricksModelServingMetricsIntegrationDataflowResponse:
      DatabricksModelServingMetricsIntegrationDataflowResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
