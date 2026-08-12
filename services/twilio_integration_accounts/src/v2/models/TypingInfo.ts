import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { IntegrationAccountPermissions } from "./IntegrationAccountPermissions";
import { TwilioAccountAttributes } from "./TwilioAccountAttributes";
import { TwilioAccountCreateData } from "./TwilioAccountCreateData";
import { TwilioAccountData } from "./TwilioAccountData";
import { TwilioAccountRequest } from "./TwilioAccountRequest";
import { TwilioAccountResponse } from "./TwilioAccountResponse";
import { TwilioAccountUpdateAttributes } from "./TwilioAccountUpdateAttributes";
import { TwilioAccountUpdateData } from "./TwilioAccountUpdateData";
import { TwilioAccountUpdateRequest } from "./TwilioAccountUpdateRequest";
import { TwilioAccountsResponse } from "./TwilioAccountsResponse";
import { TwilioBasicAuth } from "./TwilioBasicAuth";
import { TwilioDataflow } from "./TwilioDataflow";
import { TwilioSettings } from "./TwilioSettings";
import { TwilioSettingsUpdate } from "./TwilioSettingsUpdate";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
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
  },
  oneOfMap: {
    TwilioAuthentication: ["TwilioBasicAuth"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    IntegrationAccountPermissions: IntegrationAccountPermissions,
    TwilioAccountAttributes: TwilioAccountAttributes,
    TwilioAccountCreateData: TwilioAccountCreateData,
    TwilioAccountData: TwilioAccountData,
    TwilioAccountRequest: TwilioAccountRequest,
    TwilioAccountResponse: TwilioAccountResponse,
    TwilioAccountUpdateAttributes: TwilioAccountUpdateAttributes,
    TwilioAccountUpdateData: TwilioAccountUpdateData,
    TwilioAccountUpdateRequest: TwilioAccountUpdateRequest,
    TwilioAccountsResponse: TwilioAccountsResponse,
    TwilioBasicAuth: TwilioBasicAuth,
    TwilioDataflow: TwilioDataflow,
    TwilioSettings: TwilioSettings,
    TwilioSettingsUpdate: TwilioSettingsUpdate,
  },
};
