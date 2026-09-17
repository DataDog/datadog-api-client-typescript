import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TwilioAlertsLogsIntegrationDataflowRequest } from "./TwilioAlertsLogsIntegrationDataflowRequest";
import { TwilioCallSummariesLogsIntegrationDataflowRequest } from "./TwilioCallSummariesLogsIntegrationDataflowRequest";
import { TwilioCloudCostMetricsIntegrationDataflowRequest } from "./TwilioCloudCostMetricsIntegrationDataflowRequest";
import { TwilioEventsLogsIntegrationDataflowRequest } from "./TwilioEventsLogsIntegrationDataflowRequest";
import { TwilioMessagesLogsIntegrationDataflowRequest } from "./TwilioMessagesLogsIntegrationDataflowRequest";

/**
 * Data Datadog collects from Twilio, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to start or stop it. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Where a dataflow depends on a Twilio feature being enabled, that prerequisite is noted on the dataflow; a dataflow enabled without it is stored but collects no data.
 */
export class TwilioIntegrationDataflowsRequest {
  /**
   * Twilio Alert resource logs, which detail the errors and warnings raised when Twilio makes a webhook request to your server or when your application calls the Twilio REST API. This is the one kind of data the integration collects by default.
   */
  "twilioAlertsLogs"?: TwilioAlertsLogsIntegrationDataflowRequest;
  /**
   * Twilio Call Summary resource logs, covering the metadata and performance of the calls made from your Twilio account. Requires Voice Insights Advanced Features to be enabled on the Twilio account; without it this dataflow collects no data.
   */
  "twilioCallSummariesLogs"?: TwilioCallSummariesLogsIntegrationDataflowRequest;
  /**
   * Your Twilio cost data, so that Twilio spend can be broken down and attributed in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). Cost data appears in Cloud Cost Management within 24 hours of enabling this dataflow.
   */
  "twilioCloudCostMetrics"?: TwilioCloudCostMetricsIntegrationDataflowRequest;
  /**
   * Twilio Event resource logs, which record virtually every action taken in your Twilio account, such as provisioning a phone number, changing account security settings, or deleting a recording. Actions are recorded whether they came from the REST API, a user in the Twilio Console, or Twilio itself. [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/) analyzes and correlates these logs to detect threats in real time.
   */
  "twilioEventsLogs"?: TwilioEventsLogsIntegrationDataflowRequest;
  /**
   * Twilio Message resource logs for inbound and outbound messages, used to track delivery and troubleshoot message errors. A log is produced when you send a message through the REST API, when Twilio executes a TwiML instruction, and when someone messages one of your Twilio numbers or channel addresses. Message bodies are never collected.
   */
  "twilioMessagesLogs"?: TwilioMessagesLogsIntegrationDataflowRequest;
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
      type: "TwilioAlertsLogsIntegrationDataflowRequest",
    },
    twilioCallSummariesLogs: {
      baseName: "twilio-call-summaries-logs",
      type: "TwilioCallSummariesLogsIntegrationDataflowRequest",
    },
    twilioCloudCostMetrics: {
      baseName: "twilio-cloud-cost-metrics",
      type: "TwilioCloudCostMetricsIntegrationDataflowRequest",
    },
    twilioEventsLogs: {
      baseName: "twilio-events-logs",
      type: "TwilioEventsLogsIntegrationDataflowRequest",
    },
    twilioMessagesLogs: {
      baseName: "twilio-messages-logs",
      type: "TwilioMessagesLogsIntegrationDataflowRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TwilioIntegrationDataflowsRequest.attributeTypeMap;
  }

  public constructor() {}
}
