import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ElasticCloudDetailedIndexStatsIntegrationDataflowRequest } from "./ElasticCloudDetailedIndexStatsIntegrationDataflowRequest";
import { ElasticCloudDetailedIndexStatsIntegrationDataflowResponse } from "./ElasticCloudDetailedIndexStatsIntegrationDataflowResponse";
import { ElasticCloudIndexStatsIntegrationDataflowRequest } from "./ElasticCloudIndexStatsIntegrationDataflowRequest";
import { ElasticCloudIndexStatsIntegrationDataflowResponse } from "./ElasticCloudIndexStatsIntegrationDataflowResponse";
import { ElasticCloudIntegrationAccountBasicAuthRequest } from "./ElasticCloudIntegrationAccountBasicAuthRequest";
import { ElasticCloudIntegrationAccountBasicAuthResponse } from "./ElasticCloudIntegrationAccountBasicAuthResponse";
import { ElasticCloudIntegrationAccountBasicAuthUpdate } from "./ElasticCloudIntegrationAccountBasicAuthUpdate";
import { ElasticCloudIntegrationAccountCreateAttributes } from "./ElasticCloudIntegrationAccountCreateAttributes";
import { ElasticCloudIntegrationAccountCreateData } from "./ElasticCloudIntegrationAccountCreateData";
import { ElasticCloudIntegrationAccountCreateRequest } from "./ElasticCloudIntegrationAccountCreateRequest";
import { ElasticCloudIntegrationAccountResponse } from "./ElasticCloudIntegrationAccountResponse";
import { ElasticCloudIntegrationAccountResponseAttributes } from "./ElasticCloudIntegrationAccountResponseAttributes";
import { ElasticCloudIntegrationAccountResponseData } from "./ElasticCloudIntegrationAccountResponseData";
import { ElasticCloudIntegrationAccountSettingsRequest } from "./ElasticCloudIntegrationAccountSettingsRequest";
import { ElasticCloudIntegrationAccountSettingsResponse } from "./ElasticCloudIntegrationAccountSettingsResponse";
import { ElasticCloudIntegrationAccountSettingsUpdate } from "./ElasticCloudIntegrationAccountSettingsUpdate";
import { ElasticCloudIntegrationAccountUpdateAttributes } from "./ElasticCloudIntegrationAccountUpdateAttributes";
import { ElasticCloudIntegrationAccountUpdateData } from "./ElasticCloudIntegrationAccountUpdateData";
import { ElasticCloudIntegrationAccountUpdateRequest } from "./ElasticCloudIntegrationAccountUpdateRequest";
import { ElasticCloudIntegrationAccountsResponse } from "./ElasticCloudIntegrationAccountsResponse";
import { ElasticCloudIntegrationDataflowsRequest } from "./ElasticCloudIntegrationDataflowsRequest";
import { ElasticCloudIntegrationDataflowsResponse } from "./ElasticCloudIntegrationDataflowsResponse";
import { ElasticCloudMetricsIntegrationDataflowResponse } from "./ElasticCloudMetricsIntegrationDataflowResponse";
import { ElasticCloudPendingTaskStatsIntegrationDataflowRequest } from "./ElasticCloudPendingTaskStatsIntegrationDataflowRequest";
import { ElasticCloudPendingTaskStatsIntegrationDataflowResponse } from "./ElasticCloudPendingTaskStatsIntegrationDataflowResponse";
import { ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest } from "./ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest";
import { ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse } from "./ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse";
import { ElasticCloudPrimaryShardStatsIntegrationDataflowRequest } from "./ElasticCloudPrimaryShardStatsIntegrationDataflowRequest";
import { ElasticCloudPrimaryShardStatsIntegrationDataflowResponse } from "./ElasticCloudPrimaryShardStatsIntegrationDataflowResponse";
import { ElasticCloudShardAllocationStatsIntegrationDataflowRequest } from "./ElasticCloudShardAllocationStatsIntegrationDataflowRequest";
import { ElasticCloudShardAllocationStatsIntegrationDataflowResponse } from "./ElasticCloudShardAllocationStatsIntegrationDataflowResponse";
import { ElasticCloudSlmStatsIntegrationDataflowRequest } from "./ElasticCloudSlmStatsIntegrationDataflowRequest";
import { ElasticCloudSlmStatsIntegrationDataflowResponse } from "./ElasticCloudSlmStatsIntegrationDataflowResponse";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ElasticCloudIntegrationAccountBasicAuthType: ["basic"],
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
  },
  oneOfMap: {
    ElasticCloudIntegrationAccountAuthenticationRequest: [
      "ElasticCloudIntegrationAccountBasicAuthRequest",
    ],
    ElasticCloudIntegrationAccountAuthenticationResponse: [
      "ElasticCloudIntegrationAccountBasicAuthResponse",
    ],
    ElasticCloudIntegrationAccountAuthenticationUpdate: [
      "ElasticCloudIntegrationAccountBasicAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ElasticCloudDetailedIndexStatsIntegrationDataflowRequest:
      ElasticCloudDetailedIndexStatsIntegrationDataflowRequest,
    ElasticCloudDetailedIndexStatsIntegrationDataflowResponse:
      ElasticCloudDetailedIndexStatsIntegrationDataflowResponse,
    ElasticCloudIndexStatsIntegrationDataflowRequest:
      ElasticCloudIndexStatsIntegrationDataflowRequest,
    ElasticCloudIndexStatsIntegrationDataflowResponse:
      ElasticCloudIndexStatsIntegrationDataflowResponse,
    ElasticCloudIntegrationAccountBasicAuthRequest:
      ElasticCloudIntegrationAccountBasicAuthRequest,
    ElasticCloudIntegrationAccountBasicAuthResponse:
      ElasticCloudIntegrationAccountBasicAuthResponse,
    ElasticCloudIntegrationAccountBasicAuthUpdate:
      ElasticCloudIntegrationAccountBasicAuthUpdate,
    ElasticCloudIntegrationAccountCreateAttributes:
      ElasticCloudIntegrationAccountCreateAttributes,
    ElasticCloudIntegrationAccountCreateData:
      ElasticCloudIntegrationAccountCreateData,
    ElasticCloudIntegrationAccountCreateRequest:
      ElasticCloudIntegrationAccountCreateRequest,
    ElasticCloudIntegrationAccountResponse:
      ElasticCloudIntegrationAccountResponse,
    ElasticCloudIntegrationAccountResponseAttributes:
      ElasticCloudIntegrationAccountResponseAttributes,
    ElasticCloudIntegrationAccountResponseData:
      ElasticCloudIntegrationAccountResponseData,
    ElasticCloudIntegrationAccountSettingsRequest:
      ElasticCloudIntegrationAccountSettingsRequest,
    ElasticCloudIntegrationAccountSettingsResponse:
      ElasticCloudIntegrationAccountSettingsResponse,
    ElasticCloudIntegrationAccountSettingsUpdate:
      ElasticCloudIntegrationAccountSettingsUpdate,
    ElasticCloudIntegrationAccountUpdateAttributes:
      ElasticCloudIntegrationAccountUpdateAttributes,
    ElasticCloudIntegrationAccountUpdateData:
      ElasticCloudIntegrationAccountUpdateData,
    ElasticCloudIntegrationAccountUpdateRequest:
      ElasticCloudIntegrationAccountUpdateRequest,
    ElasticCloudIntegrationAccountsResponse:
      ElasticCloudIntegrationAccountsResponse,
    ElasticCloudIntegrationDataflowsRequest:
      ElasticCloudIntegrationDataflowsRequest,
    ElasticCloudIntegrationDataflowsResponse:
      ElasticCloudIntegrationDataflowsResponse,
    ElasticCloudMetricsIntegrationDataflowResponse:
      ElasticCloudMetricsIntegrationDataflowResponse,
    ElasticCloudPendingTaskStatsIntegrationDataflowRequest:
      ElasticCloudPendingTaskStatsIntegrationDataflowRequest,
    ElasticCloudPendingTaskStatsIntegrationDataflowResponse:
      ElasticCloudPendingTaskStatsIntegrationDataflowResponse,
    ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest:
      ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest,
    ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse:
      ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowResponse,
    ElasticCloudPrimaryShardStatsIntegrationDataflowRequest:
      ElasticCloudPrimaryShardStatsIntegrationDataflowRequest,
    ElasticCloudPrimaryShardStatsIntegrationDataflowResponse:
      ElasticCloudPrimaryShardStatsIntegrationDataflowResponse,
    ElasticCloudShardAllocationStatsIntegrationDataflowRequest:
      ElasticCloudShardAllocationStatsIntegrationDataflowRequest,
    ElasticCloudShardAllocationStatsIntegrationDataflowResponse:
      ElasticCloudShardAllocationStatsIntegrationDataflowResponse,
    ElasticCloudSlmStatsIntegrationDataflowRequest:
      ElasticCloudSlmStatsIntegrationDataflowRequest,
    ElasticCloudSlmStatsIntegrationDataflowResponse:
      ElasticCloudSlmStatsIntegrationDataflowResponse,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
