import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { IntegrationAccountPermissions } from "./IntegrationAccountPermissions";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ElasticCloudCcmDataflowId: ["elastic-cloud-cost-data"],
    ElasticCloudCcmTokenAuthType: ["bearer_token"],
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
  },
  oneOfMap: {
    ElasticCloudCcmAuthentication: ["ElasticCloudCcmTokenAuth"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
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
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    IntegrationAccountPermissions: IntegrationAccountPermissions,
  },
};
