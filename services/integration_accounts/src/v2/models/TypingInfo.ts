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
import { ElasticCloudIntegration } from "./ElasticCloudIntegration";
import { ElasticCloudIntegrationUpdate } from "./ElasticCloudIntegrationUpdate";
import { ElasticCloudMonitoringInterface } from "./ElasticCloudMonitoringInterface";
import { ElasticCloudMonitoringInterfaceUpdate } from "./ElasticCloudMonitoringInterfaceUpdate";
import { ElasticCloudSettings } from "./ElasticCloudSettings";
import { ElasticCloudSettingsUpdate } from "./ElasticCloudSettingsUpdate";
import { IntegrationAccountAttributes } from "./IntegrationAccountAttributes";
import { IntegrationAccountCreateData } from "./IntegrationAccountCreateData";
import { IntegrationAccountData } from "./IntegrationAccountData";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { IntegrationAccountPermissions } from "./IntegrationAccountPermissions";
import { IntegrationAccountRequest } from "./IntegrationAccountRequest";
import { IntegrationAccountResponse } from "./IntegrationAccountResponse";
import { IntegrationAccountUpdateAttributes } from "./IntegrationAccountUpdateAttributes";
import { IntegrationAccountUpdateData } from "./IntegrationAccountUpdateData";
import { IntegrationAccountUpdateRequest } from "./IntegrationAccountUpdateRequest";
import { IntegrationAccountsResponse } from "./IntegrationAccountsResponse";
import { TwilioBasicAuth } from "./TwilioBasicAuth";
import { TwilioDataflow } from "./TwilioDataflow";
import { TwilioIntegration } from "./TwilioIntegration";
import { TwilioIntegrationUpdate } from "./TwilioIntegrationUpdate";
import { TwilioInterface } from "./TwilioInterface";
import { TwilioInterfaceUpdate } from "./TwilioInterfaceUpdate";
import { TwilioSettings } from "./TwilioSettings";
import { TwilioSettingsUpdate } from "./TwilioSettingsUpdate";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ElasticCloudBasicAuthType: ["basic"],
    ElasticCloudCcmDataflowId: ["elastic-cloud-cost-data"],
    ElasticCloudCcmInterfaceType: ["elastic-cloud-ccm"],
    ElasticCloudCcmTokenAuthType: ["bearer_token"],
    ElasticCloudDataflowId: ["elastic-cloud-metrics"],
    ElasticCloudIntegrationType: ["elastic-cloud"],
    ElasticCloudMonitoringInterfaceType: ["elastic-cloud"],
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountIntegrationId: ["elastic-cloud", "twilio"],
    IntegrationAccountInterfaceId: [
      "elastic-cloud",
      "elastic-cloud-ccm",
      "twilio",
    ],
    IntegrationAccountType: ["integration-account"],
    TwilioBasicAuthType: ["basic"],
    TwilioDataflowId: [
      "twilio-cloud-cost-metrics",
      "twilio-events-logs",
      "twilio-messages-logs",
      "twilio-alerts-logs",
      "twilio-call-summaries-logs",
    ],
    TwilioIntegrationType: ["twilio"],
    TwilioInterfaceType: ["twilio"],
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
    IntegrationAccountIntegration: [
      "TwilioIntegration",
      "ElasticCloudIntegration",
    ],
    IntegrationAccountIntegrationUpdate: [
      "TwilioIntegrationUpdate",
      "ElasticCloudIntegrationUpdate",
    ],
    TwilioAuthentication: ["TwilioBasicAuth"],
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
    ElasticCloudIntegration: ElasticCloudIntegration,
    ElasticCloudIntegrationUpdate: ElasticCloudIntegrationUpdate,
    ElasticCloudMonitoringInterface: ElasticCloudMonitoringInterface,
    ElasticCloudMonitoringInterfaceUpdate:
      ElasticCloudMonitoringInterfaceUpdate,
    ElasticCloudSettings: ElasticCloudSettings,
    ElasticCloudSettingsUpdate: ElasticCloudSettingsUpdate,
    IntegrationAccountAttributes: IntegrationAccountAttributes,
    IntegrationAccountCreateData: IntegrationAccountCreateData,
    IntegrationAccountData: IntegrationAccountData,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    IntegrationAccountPermissions: IntegrationAccountPermissions,
    IntegrationAccountRequest: IntegrationAccountRequest,
    IntegrationAccountResponse: IntegrationAccountResponse,
    IntegrationAccountUpdateAttributes: IntegrationAccountUpdateAttributes,
    IntegrationAccountUpdateData: IntegrationAccountUpdateData,
    IntegrationAccountUpdateRequest: IntegrationAccountUpdateRequest,
    IntegrationAccountsResponse: IntegrationAccountsResponse,
    TwilioBasicAuth: TwilioBasicAuth,
    TwilioDataflow: TwilioDataflow,
    TwilioIntegration: TwilioIntegration,
    TwilioIntegrationUpdate: TwilioIntegrationUpdate,
    TwilioInterface: TwilioInterface,
    TwilioInterfaceUpdate: TwilioInterfaceUpdate,
    TwilioSettings: TwilioSettings,
    TwilioSettingsUpdate: TwilioSettingsUpdate,
  },
};
