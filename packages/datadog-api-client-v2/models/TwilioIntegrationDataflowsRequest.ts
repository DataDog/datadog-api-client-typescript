/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TwilioAlertsLogsIntegrationDataflowRequest } from "./TwilioAlertsLogsIntegrationDataflowRequest";
import { TwilioCallSummariesLogsIntegrationDataflowRequest } from "./TwilioCallSummariesLogsIntegrationDataflowRequest";
import { TwilioCloudCostMetricsIntegrationDataflowRequest } from "./TwilioCloudCostMetricsIntegrationDataflowRequest";
import { TwilioEventsLogsIntegrationDataflowRequest } from "./TwilioEventsLogsIntegrationDataflowRequest";
import { TwilioMessagesLogsIntegrationDataflowRequest } from "./TwilioMessagesLogsIntegrationDataflowRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Dataflows to configure on the Twilio integration account, keyed by dataflow id.
 */
export class TwilioIntegrationDataflowsRequest {
  /**
   * The Twilio alerts logs dataflow.
   */
  "twilioAlertsLogs"?: TwilioAlertsLogsIntegrationDataflowRequest;
  /**
   * The Twilio call summaries logs dataflow.
   */
  "twilioCallSummariesLogs"?: TwilioCallSummariesLogsIntegrationDataflowRequest;
  /**
   * The Twilio cloud cost metrics dataflow.
   */
  "twilioCloudCostMetrics"?: TwilioCloudCostMetricsIntegrationDataflowRequest;
  /**
   * The Twilio events logs dataflow.
   */
  "twilioEventsLogs"?: TwilioEventsLogsIntegrationDataflowRequest;
  /**
   * The Twilio messages logs dataflow.
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
