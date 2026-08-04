import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ElasticCloudBasicAuth } from "./ElasticCloudBasicAuth";
import { ElasticCloudCcmDataflow } from "./ElasticCloudCcmDataflow";
import { ElasticCloudCcmInterface } from "./ElasticCloudCcmInterface";
import { ElasticCloudCcmInterfaceUpdate } from "./ElasticCloudCcmInterfaceUpdate";
import { ElasticCloudCcmSettings } from "./ElasticCloudCcmSettings";
import { ElasticCloudCcmSettingsUpdate } from "./ElasticCloudCcmSettingsUpdate";
import { ElasticCloudCcmTokenAuth } from "./ElasticCloudCcmTokenAuth";
import { ElasticCloudDataflow } from "./ElasticCloudDataflow";
import { ElasticCloudIntegrationAccountAttributes } from "./ElasticCloudIntegrationAccountAttributes";
import { ElasticCloudIntegrationAccountCreateData } from "./ElasticCloudIntegrationAccountCreateData";
import { ElasticCloudIntegrationAccountData } from "./ElasticCloudIntegrationAccountData";
import { ElasticCloudIntegrationAccountRequest } from "./ElasticCloudIntegrationAccountRequest";
import { ElasticCloudIntegrationAccountResponse } from "./ElasticCloudIntegrationAccountResponse";
import { ElasticCloudIntegrationAccountUpdateAttributes } from "./ElasticCloudIntegrationAccountUpdateAttributes";
import { ElasticCloudIntegrationAccountUpdateData } from "./ElasticCloudIntegrationAccountUpdateData";
import { ElasticCloudIntegrationAccountUpdateRequest } from "./ElasticCloudIntegrationAccountUpdateRequest";
import { ElasticCloudIntegrationAccountsResponse } from "./ElasticCloudIntegrationAccountsResponse";
import { ElasticCloudMonitoringInterface } from "./ElasticCloudMonitoringInterface";
import { ElasticCloudMonitoringInterfaceUpdate } from "./ElasticCloudMonitoringInterfaceUpdate";
import { ElasticCloudSettings } from "./ElasticCloudSettings";
import { ElasticCloudSettingsUpdate } from "./ElasticCloudSettingsUpdate";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { IntegrationAccountPermissions } from "./IntegrationAccountPermissions";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ElasticCloudBasicAuthType: ["basic"],
    ElasticCloudCcmDataflowId: ["elastic-cloud-cost-data"],
    ElasticCloudCcmInterfaceType: ["elastic-cloud-ccm"],
    ElasticCloudCcmTokenAuthType: ["bearer_token"],
    ElasticCloudDataflowId: ["elastic-cloud-metrics"],
    ElasticCloudInterfaceId: ["elastic-cloud", "elastic-cloud-ccm"],
    ElasticCloudMonitoringInterfaceType: ["elastic-cloud"],
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
    ElasticCloudInterface: [
      "ElasticCloudMonitoringInterface",
      "ElasticCloudCcmInterface",
    ],
    ElasticCloudInterfaceUpdate: [
      "ElasticCloudMonitoringInterfaceUpdate",
      "ElasticCloudCcmInterfaceUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ElasticCloudBasicAuth: ElasticCloudBasicAuth,
    ElasticCloudCcmDataflow: ElasticCloudCcmDataflow,
    ElasticCloudCcmInterface: ElasticCloudCcmInterface,
    ElasticCloudCcmInterfaceUpdate: ElasticCloudCcmInterfaceUpdate,
    ElasticCloudCcmSettings: ElasticCloudCcmSettings,
    ElasticCloudCcmSettingsUpdate: ElasticCloudCcmSettingsUpdate,
    ElasticCloudCcmTokenAuth: ElasticCloudCcmTokenAuth,
    ElasticCloudDataflow: ElasticCloudDataflow,
    ElasticCloudIntegrationAccountAttributes:
      ElasticCloudIntegrationAccountAttributes,
    ElasticCloudIntegrationAccountCreateData:
      ElasticCloudIntegrationAccountCreateData,
    ElasticCloudIntegrationAccountData: ElasticCloudIntegrationAccountData,
    ElasticCloudIntegrationAccountRequest:
      ElasticCloudIntegrationAccountRequest,
    ElasticCloudIntegrationAccountResponse:
      ElasticCloudIntegrationAccountResponse,
    ElasticCloudIntegrationAccountUpdateAttributes:
      ElasticCloudIntegrationAccountUpdateAttributes,
    ElasticCloudIntegrationAccountUpdateData:
      ElasticCloudIntegrationAccountUpdateData,
    ElasticCloudIntegrationAccountUpdateRequest:
      ElasticCloudIntegrationAccountUpdateRequest,
    ElasticCloudIntegrationAccountsResponse:
      ElasticCloudIntegrationAccountsResponse,
    ElasticCloudMonitoringInterface: ElasticCloudMonitoringInterface,
    ElasticCloudMonitoringInterfaceUpdate:
      ElasticCloudMonitoringInterfaceUpdate,
    ElasticCloudSettings: ElasticCloudSettings,
    ElasticCloudSettingsUpdate: ElasticCloudSettingsUpdate,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    IntegrationAccountPermissions: IntegrationAccountPermissions,
  },
};
