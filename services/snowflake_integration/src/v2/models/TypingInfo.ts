import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { SnowflakeAccountUsageMetricsIntegrationDataflowRequest } from "./SnowflakeAccountUsageMetricsIntegrationDataflowRequest";
import { SnowflakeAccountUsageMetricsIntegrationDataflowResponse } from "./SnowflakeAccountUsageMetricsIntegrationDataflowResponse";
import { SnowflakeAccountUsageMetricsIntegrationDataflowSettingsRequest } from "./SnowflakeAccountUsageMetricsIntegrationDataflowSettingsRequest";
import { SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse } from "./SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse";
import { SnowflakeCloudCostMetricsIntegrationDataflowRequest } from "./SnowflakeCloudCostMetricsIntegrationDataflowRequest";
import { SnowflakeCloudCostMetricsIntegrationDataflowResponse } from "./SnowflakeCloudCostMetricsIntegrationDataflowResponse";
import { SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest } from "./SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest";
import { SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse } from "./SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse";
import { SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest } from "./SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest";
import { SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse } from "./SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse";
import { SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest } from "./SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest";
import { SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse } from "./SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse";
import { SnowflakeEventTableLogsIntegrationDataflowRequest } from "./SnowflakeEventTableLogsIntegrationDataflowRequest";
import { SnowflakeEventTableLogsIntegrationDataflowResponse } from "./SnowflakeEventTableLogsIntegrationDataflowResponse";
import { SnowflakeEventTableLogsIntegrationDataflowSettingsRequest } from "./SnowflakeEventTableLogsIntegrationDataflowSettingsRequest";
import { SnowflakeEventTableLogsIntegrationDataflowSettingsResponse } from "./SnowflakeEventTableLogsIntegrationDataflowSettingsResponse";
import { SnowflakeIntegrationAccountAuthenticationRequest } from "./SnowflakeIntegrationAccountAuthenticationRequest";
import { SnowflakeIntegrationAccountAuthenticationResponse } from "./SnowflakeIntegrationAccountAuthenticationResponse";
import { SnowflakeIntegrationAccountCreateAttributes } from "./SnowflakeIntegrationAccountCreateAttributes";
import { SnowflakeIntegrationAccountCreateData } from "./SnowflakeIntegrationAccountCreateData";
import { SnowflakeIntegrationAccountCreateRequest } from "./SnowflakeIntegrationAccountCreateRequest";
import { SnowflakeIntegrationAccountResponse } from "./SnowflakeIntegrationAccountResponse";
import { SnowflakeIntegrationAccountResponseAttributes } from "./SnowflakeIntegrationAccountResponseAttributes";
import { SnowflakeIntegrationAccountResponseData } from "./SnowflakeIntegrationAccountResponseData";
import { SnowflakeIntegrationAccountSettingsRequest } from "./SnowflakeIntegrationAccountSettingsRequest";
import { SnowflakeIntegrationAccountSettingsResponse } from "./SnowflakeIntegrationAccountSettingsResponse";
import { SnowflakeIntegrationAccountSettingsUpdate } from "./SnowflakeIntegrationAccountSettingsUpdate";
import { SnowflakeIntegrationAccountUpdateAttributes } from "./SnowflakeIntegrationAccountUpdateAttributes";
import { SnowflakeIntegrationAccountUpdateData } from "./SnowflakeIntegrationAccountUpdateData";
import { SnowflakeIntegrationAccountUpdateRequest } from "./SnowflakeIntegrationAccountUpdateRequest";
import { SnowflakeIntegrationAccountsResponse } from "./SnowflakeIntegrationAccountsResponse";
import { SnowflakeIntegrationDataflowsRequest } from "./SnowflakeIntegrationDataflowsRequest";
import { SnowflakeIntegrationDataflowsResponse } from "./SnowflakeIntegrationDataflowsResponse";
import { SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest } from "./SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest";
import { SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse } from "./SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse";
import { SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest } from "./SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest";
import { SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse } from "./SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse";
import { SnowflakeQueryHistoryLogsIntegrationDataflowRequest } from "./SnowflakeQueryHistoryLogsIntegrationDataflowRequest";
import { SnowflakeQueryHistoryLogsIntegrationDataflowResponse } from "./SnowflakeQueryHistoryLogsIntegrationDataflowResponse";
import { SnowflakeQueryHistoryLogsIntegrationDataflowSettingsRequest } from "./SnowflakeQueryHistoryLogsIntegrationDataflowSettingsRequest";
import { SnowflakeQueryHistoryLogsIntegrationDataflowSettingsResponse } from "./SnowflakeQueryHistoryLogsIntegrationDataflowSettingsResponse";
import { SnowflakeSecurityLogsIntegrationDataflowRequest } from "./SnowflakeSecurityLogsIntegrationDataflowRequest";
import { SnowflakeSecurityLogsIntegrationDataflowResponse } from "./SnowflakeSecurityLogsIntegrationDataflowResponse";
import { SnowflakeSecurityLogsIntegrationDataflowSettingsRequest } from "./SnowflakeSecurityLogsIntegrationDataflowSettingsRequest";
import { SnowflakeSecurityLogsIntegrationDataflowSettingsResponse } from "./SnowflakeSecurityLogsIntegrationDataflowSettingsResponse";
import { SnowflakeTaskHistoryLogsIntegrationDataflowRequest } from "./SnowflakeTaskHistoryLogsIntegrationDataflowRequest";
import { SnowflakeTaskHistoryLogsIntegrationDataflowResponse } from "./SnowflakeTaskHistoryLogsIntegrationDataflowResponse";
import { SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest } from "./SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest";
import { SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse } from "./SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IntegrationAccountType: ["integration-account"],
    SnowflakeIntegrationAccountPrivateKeyAuthType: ["snowflake-private-key"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    SnowflakeAccountUsageMetricsIntegrationDataflowRequest:
      SnowflakeAccountUsageMetricsIntegrationDataflowRequest,
    SnowflakeAccountUsageMetricsIntegrationDataflowResponse:
      SnowflakeAccountUsageMetricsIntegrationDataflowResponse,
    SnowflakeAccountUsageMetricsIntegrationDataflowSettingsRequest:
      SnowflakeAccountUsageMetricsIntegrationDataflowSettingsRequest,
    SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse:
      SnowflakeAccountUsageMetricsIntegrationDataflowSettingsResponse,
    SnowflakeCloudCostMetricsIntegrationDataflowRequest:
      SnowflakeCloudCostMetricsIntegrationDataflowRequest,
    SnowflakeCloudCostMetricsIntegrationDataflowResponse:
      SnowflakeCloudCostMetricsIntegrationDataflowResponse,
    SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest:
      SnowflakeCloudCostMetricsIntegrationDataflowSettingsRequest,
    SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse:
      SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse,
    SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest:
      SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowRequest,
    SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse:
      SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowResponse,
    SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest:
      SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsRequest,
    SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse:
      SnowflakeDataObservabilityQualityMonitoringIntegrationDataflowSettingsResponse,
    SnowflakeEventTableLogsIntegrationDataflowRequest:
      SnowflakeEventTableLogsIntegrationDataflowRequest,
    SnowflakeEventTableLogsIntegrationDataflowResponse:
      SnowflakeEventTableLogsIntegrationDataflowResponse,
    SnowflakeEventTableLogsIntegrationDataflowSettingsRequest:
      SnowflakeEventTableLogsIntegrationDataflowSettingsRequest,
    SnowflakeEventTableLogsIntegrationDataflowSettingsResponse:
      SnowflakeEventTableLogsIntegrationDataflowSettingsResponse,
    SnowflakeIntegrationAccountAuthenticationRequest:
      SnowflakeIntegrationAccountAuthenticationRequest,
    SnowflakeIntegrationAccountAuthenticationResponse:
      SnowflakeIntegrationAccountAuthenticationResponse,
    SnowflakeIntegrationAccountCreateAttributes:
      SnowflakeIntegrationAccountCreateAttributes,
    SnowflakeIntegrationAccountCreateData:
      SnowflakeIntegrationAccountCreateData,
    SnowflakeIntegrationAccountCreateRequest:
      SnowflakeIntegrationAccountCreateRequest,
    SnowflakeIntegrationAccountResponse: SnowflakeIntegrationAccountResponse,
    SnowflakeIntegrationAccountResponseAttributes:
      SnowflakeIntegrationAccountResponseAttributes,
    SnowflakeIntegrationAccountResponseData:
      SnowflakeIntegrationAccountResponseData,
    SnowflakeIntegrationAccountSettingsRequest:
      SnowflakeIntegrationAccountSettingsRequest,
    SnowflakeIntegrationAccountSettingsResponse:
      SnowflakeIntegrationAccountSettingsResponse,
    SnowflakeIntegrationAccountSettingsUpdate:
      SnowflakeIntegrationAccountSettingsUpdate,
    SnowflakeIntegrationAccountUpdateAttributes:
      SnowflakeIntegrationAccountUpdateAttributes,
    SnowflakeIntegrationAccountUpdateData:
      SnowflakeIntegrationAccountUpdateData,
    SnowflakeIntegrationAccountUpdateRequest:
      SnowflakeIntegrationAccountUpdateRequest,
    SnowflakeIntegrationAccountsResponse: SnowflakeIntegrationAccountsResponse,
    SnowflakeIntegrationDataflowsRequest: SnowflakeIntegrationDataflowsRequest,
    SnowflakeIntegrationDataflowsResponse:
      SnowflakeIntegrationDataflowsResponse,
    SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest:
      SnowflakeOrganizationUsageMetricsIntegrationDataflowRequest,
    SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse:
      SnowflakeOrganizationUsageMetricsIntegrationDataflowResponse,
    SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest:
      SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsRequest,
    SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse:
      SnowflakeOrganizationUsageMetricsIntegrationDataflowSettingsResponse,
    SnowflakeQueryHistoryLogsIntegrationDataflowRequest:
      SnowflakeQueryHistoryLogsIntegrationDataflowRequest,
    SnowflakeQueryHistoryLogsIntegrationDataflowResponse:
      SnowflakeQueryHistoryLogsIntegrationDataflowResponse,
    SnowflakeQueryHistoryLogsIntegrationDataflowSettingsRequest:
      SnowflakeQueryHistoryLogsIntegrationDataflowSettingsRequest,
    SnowflakeQueryHistoryLogsIntegrationDataflowSettingsResponse:
      SnowflakeQueryHistoryLogsIntegrationDataflowSettingsResponse,
    SnowflakeSecurityLogsIntegrationDataflowRequest:
      SnowflakeSecurityLogsIntegrationDataflowRequest,
    SnowflakeSecurityLogsIntegrationDataflowResponse:
      SnowflakeSecurityLogsIntegrationDataflowResponse,
    SnowflakeSecurityLogsIntegrationDataflowSettingsRequest:
      SnowflakeSecurityLogsIntegrationDataflowSettingsRequest,
    SnowflakeSecurityLogsIntegrationDataflowSettingsResponse:
      SnowflakeSecurityLogsIntegrationDataflowSettingsResponse,
    SnowflakeTaskHistoryLogsIntegrationDataflowRequest:
      SnowflakeTaskHistoryLogsIntegrationDataflowRequest,
    SnowflakeTaskHistoryLogsIntegrationDataflowResponse:
      SnowflakeTaskHistoryLogsIntegrationDataflowResponse,
    SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest:
      SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest,
    SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse:
      SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse,
  },
};
