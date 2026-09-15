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
import { DatabricksIntegrationAccountCreateAttributes } from "./DatabricksIntegrationAccountCreateAttributes";
import { DatabricksIntegrationAccountCreateData } from "./DatabricksIntegrationAccountCreateData";
import { DatabricksIntegrationAccountCreateRequest } from "./DatabricksIntegrationAccountCreateRequest";
import { DatabricksIntegrationAccountOAuthAuthRequest } from "./DatabricksIntegrationAccountOAuthAuthRequest";
import { DatabricksIntegrationAccountOAuthAuthResponse } from "./DatabricksIntegrationAccountOAuthAuthResponse";
import { DatabricksIntegrationAccountPatAuthResponse } from "./DatabricksIntegrationAccountPatAuthResponse";
import { DatabricksIntegrationAccountPatAuthUpdate } from "./DatabricksIntegrationAccountPatAuthUpdate";
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
import { IntegrationAccountPrivateActionRunnerAuthRequest } from "./IntegrationAccountPrivateActionRunnerAuthRequest";
import { IntegrationAccountPrivateActionRunnerAuthResponse } from "./IntegrationAccountPrivateActionRunnerAuthResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DatabricksIntegrationAccountOAuthAuthType: ["databricks-oauth"],
    DatabricksIntegrationAccountPatAuthType: ["pat"],
    IntegrationAccountPrivateActionRunnerAuthType: ["private-action-runner"],
    IntegrationAccountType: ["integration-account"],
  },
  oneOfMap: {
    DatabricksIntegrationAccountAuthenticationRequest: [
      "DatabricksIntegrationAccountOAuthAuthRequest",
      "IntegrationAccountPrivateActionRunnerAuthRequest",
    ],
    DatabricksIntegrationAccountAuthenticationResponse: [
      "DatabricksIntegrationAccountOAuthAuthResponse",
      "IntegrationAccountPrivateActionRunnerAuthResponse",
      "DatabricksIntegrationAccountPatAuthResponse",
    ],
    DatabricksIntegrationAccountAuthenticationUpdate: [
      "DatabricksIntegrationAccountOAuthAuthRequest",
      "IntegrationAccountPrivateActionRunnerAuthRequest",
      "DatabricksIntegrationAccountPatAuthUpdate",
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
    DatabricksIntegrationAccountPatAuthResponse:
      DatabricksIntegrationAccountPatAuthResponse,
    DatabricksIntegrationAccountPatAuthUpdate:
      DatabricksIntegrationAccountPatAuthUpdate,
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
    IntegrationAccountPrivateActionRunnerAuthRequest:
      IntegrationAccountPrivateActionRunnerAuthRequest,
    IntegrationAccountPrivateActionRunnerAuthResponse:
      IntegrationAccountPrivateActionRunnerAuthResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
