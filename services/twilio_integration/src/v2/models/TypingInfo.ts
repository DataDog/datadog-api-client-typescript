import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { TwilioAlertsLogsIntegrationDataflowRequest } from "./TwilioAlertsLogsIntegrationDataflowRequest";
import { TwilioAlertsLogsIntegrationDataflowResponse } from "./TwilioAlertsLogsIntegrationDataflowResponse";
import { TwilioCallSummariesLogsIntegrationDataflowRequest } from "./TwilioCallSummariesLogsIntegrationDataflowRequest";
import { TwilioCallSummariesLogsIntegrationDataflowResponse } from "./TwilioCallSummariesLogsIntegrationDataflowResponse";
import { TwilioCloudCostMetricsIntegrationDataflowRequest } from "./TwilioCloudCostMetricsIntegrationDataflowRequest";
import { TwilioCloudCostMetricsIntegrationDataflowResponse } from "./TwilioCloudCostMetricsIntegrationDataflowResponse";
import { TwilioEventsLogsIntegrationDataflowRequest } from "./TwilioEventsLogsIntegrationDataflowRequest";
import { TwilioEventsLogsIntegrationDataflowResponse } from "./TwilioEventsLogsIntegrationDataflowResponse";
import { TwilioIntegrationAccountBasicAuthRequest } from "./TwilioIntegrationAccountBasicAuthRequest";
import { TwilioIntegrationAccountBasicAuthResponse } from "./TwilioIntegrationAccountBasicAuthResponse";
import { TwilioIntegrationAccountBasicAuthUpdate } from "./TwilioIntegrationAccountBasicAuthUpdate";
import { TwilioIntegrationAccountCreateAttributes } from "./TwilioIntegrationAccountCreateAttributes";
import { TwilioIntegrationAccountCreateData } from "./TwilioIntegrationAccountCreateData";
import { TwilioIntegrationAccountCreateRequest } from "./TwilioIntegrationAccountCreateRequest";
import { TwilioIntegrationAccountResponse } from "./TwilioIntegrationAccountResponse";
import { TwilioIntegrationAccountResponseAttributes } from "./TwilioIntegrationAccountResponseAttributes";
import { TwilioIntegrationAccountResponseData } from "./TwilioIntegrationAccountResponseData";
import { TwilioIntegrationAccountSettingsRequest } from "./TwilioIntegrationAccountSettingsRequest";
import { TwilioIntegrationAccountSettingsResponse } from "./TwilioIntegrationAccountSettingsResponse";
import { TwilioIntegrationAccountSettingsUpdate } from "./TwilioIntegrationAccountSettingsUpdate";
import { TwilioIntegrationAccountUpdateAttributes } from "./TwilioIntegrationAccountUpdateAttributes";
import { TwilioIntegrationAccountUpdateData } from "./TwilioIntegrationAccountUpdateData";
import { TwilioIntegrationAccountUpdateRequest } from "./TwilioIntegrationAccountUpdateRequest";
import { TwilioIntegrationAccountsResponse } from "./TwilioIntegrationAccountsResponse";
import { TwilioIntegrationDataflowsRequest } from "./TwilioIntegrationDataflowsRequest";
import { TwilioIntegrationDataflowsResponse } from "./TwilioIntegrationDataflowsResponse";
import { TwilioMessagesLogsIntegrationDataflowRequest } from "./TwilioMessagesLogsIntegrationDataflowRequest";
import { TwilioMessagesLogsIntegrationDataflowResponse } from "./TwilioMessagesLogsIntegrationDataflowResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IntegrationAccountDataflowHealth: [
      "DATAFLOW_HEALTH_OK",
      "DATAFLOW_HEALTH_BROKEN",
      "DATAFLOW_HEALTH_UNKNOWN",
    ],
    IntegrationAccountType: ["integration-account"],
    TwilioIntegrationAccountBasicAuthType: ["basic"],
  },
  oneOfMap: {
    TwilioIntegrationAccountAuthenticationRequest: [
      "TwilioIntegrationAccountBasicAuthRequest",
    ],
    TwilioIntegrationAccountAuthenticationResponse: [
      "TwilioIntegrationAccountBasicAuthResponse",
    ],
    TwilioIntegrationAccountAuthenticationUpdate: [
      "TwilioIntegrationAccountBasicAuthUpdate",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IntegrationAccountDataflowStatus: IntegrationAccountDataflowStatus,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    TwilioAlertsLogsIntegrationDataflowRequest:
      TwilioAlertsLogsIntegrationDataflowRequest,
    TwilioAlertsLogsIntegrationDataflowResponse:
      TwilioAlertsLogsIntegrationDataflowResponse,
    TwilioCallSummariesLogsIntegrationDataflowRequest:
      TwilioCallSummariesLogsIntegrationDataflowRequest,
    TwilioCallSummariesLogsIntegrationDataflowResponse:
      TwilioCallSummariesLogsIntegrationDataflowResponse,
    TwilioCloudCostMetricsIntegrationDataflowRequest:
      TwilioCloudCostMetricsIntegrationDataflowRequest,
    TwilioCloudCostMetricsIntegrationDataflowResponse:
      TwilioCloudCostMetricsIntegrationDataflowResponse,
    TwilioEventsLogsIntegrationDataflowRequest:
      TwilioEventsLogsIntegrationDataflowRequest,
    TwilioEventsLogsIntegrationDataflowResponse:
      TwilioEventsLogsIntegrationDataflowResponse,
    TwilioIntegrationAccountBasicAuthRequest:
      TwilioIntegrationAccountBasicAuthRequest,
    TwilioIntegrationAccountBasicAuthResponse:
      TwilioIntegrationAccountBasicAuthResponse,
    TwilioIntegrationAccountBasicAuthUpdate:
      TwilioIntegrationAccountBasicAuthUpdate,
    TwilioIntegrationAccountCreateAttributes:
      TwilioIntegrationAccountCreateAttributes,
    TwilioIntegrationAccountCreateData: TwilioIntegrationAccountCreateData,
    TwilioIntegrationAccountCreateRequest:
      TwilioIntegrationAccountCreateRequest,
    TwilioIntegrationAccountResponse: TwilioIntegrationAccountResponse,
    TwilioIntegrationAccountResponseAttributes:
      TwilioIntegrationAccountResponseAttributes,
    TwilioIntegrationAccountResponseData: TwilioIntegrationAccountResponseData,
    TwilioIntegrationAccountSettingsRequest:
      TwilioIntegrationAccountSettingsRequest,
    TwilioIntegrationAccountSettingsResponse:
      TwilioIntegrationAccountSettingsResponse,
    TwilioIntegrationAccountSettingsUpdate:
      TwilioIntegrationAccountSettingsUpdate,
    TwilioIntegrationAccountUpdateAttributes:
      TwilioIntegrationAccountUpdateAttributes,
    TwilioIntegrationAccountUpdateData: TwilioIntegrationAccountUpdateData,
    TwilioIntegrationAccountUpdateRequest:
      TwilioIntegrationAccountUpdateRequest,
    TwilioIntegrationAccountsResponse: TwilioIntegrationAccountsResponse,
    TwilioIntegrationDataflowsRequest: TwilioIntegrationDataflowsRequest,
    TwilioIntegrationDataflowsResponse: TwilioIntegrationDataflowsResponse,
    TwilioMessagesLogsIntegrationDataflowRequest:
      TwilioMessagesLogsIntegrationDataflowRequest,
    TwilioMessagesLogsIntegrationDataflowResponse:
      TwilioMessagesLogsIntegrationDataflowResponse,
  },
};
