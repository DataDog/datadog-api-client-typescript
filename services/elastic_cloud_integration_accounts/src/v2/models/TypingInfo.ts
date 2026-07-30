import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ElasticCloudBasicAuth } from "./ElasticCloudBasicAuth";
import { ElasticCloudCcmAccountAttributes } from "./ElasticCloudCcmAccountAttributes";
import { ElasticCloudCcmAccountCreateData } from "./ElasticCloudCcmAccountCreateData";
import { ElasticCloudCcmAccountData } from "./ElasticCloudCcmAccountData";
import { ElasticCloudCcmAccountRequest } from "./ElasticCloudCcmAccountRequest";
import { ElasticCloudCcmAccountResponse } from "./ElasticCloudCcmAccountResponse";
import { ElasticCloudCcmAccountUpdateAttributes } from "./ElasticCloudCcmAccountUpdateAttributes";
import { ElasticCloudCcmAccountUpdateData } from "./ElasticCloudCcmAccountUpdateData";
import { ElasticCloudCcmAccountUpdateRequest } from "./ElasticCloudCcmAccountUpdateRequest";
import { ElasticCloudCcmAccountsResponse } from "./ElasticCloudCcmAccountsResponse";
import { ElasticCloudCcmDataflow } from "./ElasticCloudCcmDataflow";
import { ElasticCloudCcmSettings } from "./ElasticCloudCcmSettings";
import { ElasticCloudCcmSettingsUpdate } from "./ElasticCloudCcmSettingsUpdate";
import { ElasticCloudCcmTokenAuth } from "./ElasticCloudCcmTokenAuth";
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
    ElasticCloudCcmDataflowId: ["elastic-cloud-cost-data"],
    ElasticCloudCcmTokenAuthType: ["bearer_token"],
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
    ElasticCloudCcmAuthentication: ["ElasticCloudCcmTokenAuth"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ElasticCloudBasicAuth: ElasticCloudBasicAuth,
    ElasticCloudCcmAccountAttributes: ElasticCloudCcmAccountAttributes,
    ElasticCloudCcmAccountCreateData: ElasticCloudCcmAccountCreateData,
    ElasticCloudCcmAccountData: ElasticCloudCcmAccountData,
    ElasticCloudCcmAccountRequest: ElasticCloudCcmAccountRequest,
    ElasticCloudCcmAccountResponse: ElasticCloudCcmAccountResponse,
    ElasticCloudCcmAccountUpdateAttributes:
      ElasticCloudCcmAccountUpdateAttributes,
    ElasticCloudCcmAccountUpdateData: ElasticCloudCcmAccountUpdateData,
    ElasticCloudCcmAccountUpdateRequest: ElasticCloudCcmAccountUpdateRequest,
    ElasticCloudCcmAccountsResponse: ElasticCloudCcmAccountsResponse,
    ElasticCloudCcmDataflow: ElasticCloudCcmDataflow,
    ElasticCloudCcmSettings: ElasticCloudCcmSettings,
    ElasticCloudCcmSettingsUpdate: ElasticCloudCcmSettingsUpdate,
    ElasticCloudCcmTokenAuth: ElasticCloudCcmTokenAuth,
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
