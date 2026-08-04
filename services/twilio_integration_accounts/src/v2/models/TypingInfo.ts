import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { IntegrationAccountPermissions } from "./IntegrationAccountPermissions";
import { TwilioBasicAuth } from "./TwilioBasicAuth";
import { TwilioDataflow } from "./TwilioDataflow";
import { TwilioIntegrationAccountAttributes } from "./TwilioIntegrationAccountAttributes";
import { TwilioIntegrationAccountCreateData } from "./TwilioIntegrationAccountCreateData";
import { TwilioIntegrationAccountData } from "./TwilioIntegrationAccountData";
import { TwilioIntegrationAccountRequest } from "./TwilioIntegrationAccountRequest";
import { TwilioIntegrationAccountResponse } from "./TwilioIntegrationAccountResponse";
import { TwilioIntegrationAccountUpdateAttributes } from "./TwilioIntegrationAccountUpdateAttributes";
import { TwilioIntegrationAccountUpdateData } from "./TwilioIntegrationAccountUpdateData";
import { TwilioIntegrationAccountUpdateRequest } from "./TwilioIntegrationAccountUpdateRequest";
import { TwilioIntegrationAccountsResponse } from "./TwilioIntegrationAccountsResponse";
import { TwilioInterface } from "./TwilioInterface";
import { TwilioInterfaceUpdate } from "./TwilioInterfaceUpdate";
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
    TwilioInterfaceType: ["twilio"],
  },
  oneOfMap: {
    TwilioAuthentication: ["TwilioBasicAuth"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    IntegrationAccountPermissions: IntegrationAccountPermissions,
    TwilioBasicAuth: TwilioBasicAuth,
    TwilioDataflow: TwilioDataflow,
    TwilioIntegrationAccountAttributes: TwilioIntegrationAccountAttributes,
    TwilioIntegrationAccountCreateData: TwilioIntegrationAccountCreateData,
    TwilioIntegrationAccountData: TwilioIntegrationAccountData,
    TwilioIntegrationAccountRequest: TwilioIntegrationAccountRequest,
    TwilioIntegrationAccountResponse: TwilioIntegrationAccountResponse,
    TwilioIntegrationAccountUpdateAttributes:
      TwilioIntegrationAccountUpdateAttributes,
    TwilioIntegrationAccountUpdateData: TwilioIntegrationAccountUpdateData,
    TwilioIntegrationAccountUpdateRequest:
      TwilioIntegrationAccountUpdateRequest,
    TwilioIntegrationAccountsResponse: TwilioIntegrationAccountsResponse,
    TwilioInterface: TwilioInterface,
    TwilioInterfaceUpdate: TwilioInterfaceUpdate,
    TwilioSettings: TwilioSettings,
    TwilioSettingsUpdate: TwilioSettingsUpdate,
  },
};
