import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioAlertsLogsIntegrationDataflowResponse } from "./TwilioAlertsLogsIntegrationDataflowResponse";
import { TwilioCallSummariesLogsIntegrationDataflowResponse } from "./TwilioCallSummariesLogsIntegrationDataflowResponse";
import { TwilioCloudCostMetricsIntegrationDataflowResponse } from "./TwilioCloudCostMetricsIntegrationDataflowResponse";
import { TwilioEventsLogsIntegrationDataflowResponse } from "./TwilioEventsLogsIntegrationDataflowResponse";
import { TwilioMessagesLogsIntegrationDataflowResponse } from "./TwilioMessagesLogsIntegrationDataflowResponse";

/**
 * Dataflows configured on the Twilio integration account, keyed by dataflow id.
 */
export class TwilioIntegrationDataflowsResponse {
  /**
   * The Twilio alerts logs dataflow.
   */
  "twilioAlertsLogs"?: TwilioAlertsLogsIntegrationDataflowResponse;
  /**
   * The Twilio call summaries logs dataflow.
   */
  "twilioCallSummariesLogs"?: TwilioCallSummariesLogsIntegrationDataflowResponse;
  /**
   * The Twilio cloud cost metrics dataflow.
   */
  "twilioCloudCostMetrics"?: TwilioCloudCostMetricsIntegrationDataflowResponse;
  /**
   * The Twilio events logs dataflow.
   */
  "twilioEventsLogs"?: TwilioEventsLogsIntegrationDataflowResponse;
  /**
   * The Twilio messages logs dataflow.
   */
  "twilioMessagesLogs"?: TwilioMessagesLogsIntegrationDataflowResponse;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    twilioAlertsLogs: {
      baseName: "twilio-alerts-logs",
      type: "TwilioAlertsLogsIntegrationDataflowResponse",
    },
    twilioCallSummariesLogs: {
      baseName: "twilio-call-summaries-logs",
      type: "TwilioCallSummariesLogsIntegrationDataflowResponse",
    },
    twilioCloudCostMetrics: {
      baseName: "twilio-cloud-cost-metrics",
      type: "TwilioCloudCostMetricsIntegrationDataflowResponse",
    },
    twilioEventsLogs: {
      baseName: "twilio-events-logs",
      type: "TwilioEventsLogsIntegrationDataflowResponse",
    },
    twilioMessagesLogs: {
      baseName: "twilio-messages-logs",
      type: "TwilioMessagesLogsIntegrationDataflowResponse",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TwilioIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
