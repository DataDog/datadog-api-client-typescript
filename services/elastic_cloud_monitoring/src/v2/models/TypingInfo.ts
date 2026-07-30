import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ElasticCloudBasicAuth } from "./ElasticCloudBasicAuth";
import { ElasticCloudDataflow } from "./ElasticCloudDataflow";
import { ElasticCloudMonitoringAccountAttributes } from "./ElasticCloudMonitoringAccountAttributes";
import { ElasticCloudMonitoringAccountCreateData } from "./ElasticCloudMonitoringAccountCreateData";
import { ElasticCloudMonitoringAccountData } from "./ElasticCloudMonitoringAccountData";
import { ElasticCloudMonitoringAccountRequest } from "./ElasticCloudMonitoringAccountRequest";
import { ElasticCloudMonitoringAccountResponse } from "./ElasticCloudMonitoringAccountResponse";
import { ElasticCloudMonitoringAccountUpdateAttributes } from "./ElasticCloudMonitoringAccountUpdateAttributes";
import { ElasticCloudMonitoringAccountUpdateData } from "./ElasticCloudMonitoringAccountUpdateData";
import { ElasticCloudMonitoringAccountUpdateRequest } from "./ElasticCloudMonitoringAccountUpdateRequest";
import { ElasticCloudMonitoringAccountsResponse } from "./ElasticCloudMonitoringAccountsResponse";
import { ElasticCloudSettings } from "./ElasticCloudSettings";
import { ElasticCloudSettingsUpdate } from "./ElasticCloudSettingsUpdate";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { IntegrationAccountPermissions } from "./IntegrationAccountPermissions";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ElasticCloudBasicAuthType: ["basic"],
    ElasticCloudDataflowId: ["elastic-cloud-metrics"],
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
  },
  oneOfMap: {
    ElasticCloudAuthentication: ["ElasticCloudBasicAuth"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ElasticCloudBasicAuth: ElasticCloudBasicAuth,
    ElasticCloudDataflow: ElasticCloudDataflow,
    ElasticCloudMonitoringAccountAttributes:
      ElasticCloudMonitoringAccountAttributes,
    ElasticCloudMonitoringAccountCreateData:
      ElasticCloudMonitoringAccountCreateData,
    ElasticCloudMonitoringAccountData: ElasticCloudMonitoringAccountData,
    ElasticCloudMonitoringAccountRequest: ElasticCloudMonitoringAccountRequest,
    ElasticCloudMonitoringAccountResponse:
      ElasticCloudMonitoringAccountResponse,
    ElasticCloudMonitoringAccountUpdateAttributes:
      ElasticCloudMonitoringAccountUpdateAttributes,
    ElasticCloudMonitoringAccountUpdateData:
      ElasticCloudMonitoringAccountUpdateData,
    ElasticCloudMonitoringAccountUpdateRequest:
      ElasticCloudMonitoringAccountUpdateRequest,
    ElasticCloudMonitoringAccountsResponse:
      ElasticCloudMonitoringAccountsResponse,
    ElasticCloudSettings: ElasticCloudSettings,
    ElasticCloudSettingsUpdate: ElasticCloudSettingsUpdate,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    IntegrationAccountPermissions: IntegrationAccountPermissions,
  },
};
