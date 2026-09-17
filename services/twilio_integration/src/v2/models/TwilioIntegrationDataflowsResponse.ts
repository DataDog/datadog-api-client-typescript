import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioAlertsLogsIntegrationDataflowResponse } from "./TwilioAlertsLogsIntegrationDataflowResponse";
import { TwilioCallSummariesLogsIntegrationDataflowResponse } from "./TwilioCallSummariesLogsIntegrationDataflowResponse";
import { TwilioCloudCostMetricsIntegrationDataflowResponse } from "./TwilioCloudCostMetricsIntegrationDataflowResponse";
import { TwilioEventsLogsIntegrationDataflowResponse } from "./TwilioEventsLogsIntegrationDataflowResponse";
import { TwilioMessagesLogsIntegrationDataflowResponse } from "./TwilioMessagesLogsIntegrationDataflowResponse";

/**
 * Data Datadog collects from Twilio, keyed by dataflow id.
 */
export class TwilioIntegrationDataflowsResponse {
  /**
   * Twilio Alert resource logs, which detail the errors and warnings raised when Twilio makes a webhook request to your server or when your application calls the Twilio REST API.
   */
  "twilioAlertsLogs"?: TwilioAlertsLogsIntegrationDataflowResponse;
  /**
   * Twilio Call Summary resource logs, covering the metadata and performance of the calls made from your Twilio account. Requires Voice Insights Advanced Features to be enabled on the Twilio account; without it this dataflow collects no data.
   */
  "twilioCallSummariesLogs"?: TwilioCallSummariesLogsIntegrationDataflowResponse;
  /**
   * Your Twilio cost data, so that Twilio spend can be broken down and attributed in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/).
   */
  "twilioCloudCostMetrics"?: TwilioCloudCostMetricsIntegrationDataflowResponse;
  /**
   * Twilio Event resource logs, which record virtually every action taken in your Twilio account, such as provisioning a phone number, changing account security settings, or deleting a recording. Actions are recorded whether they came from the REST API, a user in the Twilio Console, or Twilio itself. [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/) analyzes and correlates these logs to detect threats in real time.
   */
  "twilioEventsLogs"?: TwilioEventsLogsIntegrationDataflowResponse;
  /**
   * Twilio Message resource logs for inbound and outbound messages, used to track delivery and troubleshoot message errors. A log is produced when you send a message through the REST API, when Twilio executes a TwiML instruction, and when someone messages one of your Twilio numbers or channel addresses. Message bodies are never collected.
   */
  "twilioMessagesLogs"?: TwilioMessagesLogsIntegrationDataflowResponse;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
