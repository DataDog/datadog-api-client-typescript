import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Identifier of a Twilio dataflow.
 */
export type TwilioDataflowId =
  | typeof CLOUD_COST_METRICS
  | typeof EVENTS_LOGS
  | typeof MESSAGES_LOGS
  | typeof ALERTS_LOGS
  | typeof CALL_SUMMARIES_LOGS
  | UnparsedObject;
export const CLOUD_COST_METRICS = "twilio-cloud-cost-metrics";
export const EVENTS_LOGS = "twilio-events-logs";
export const MESSAGES_LOGS = "twilio-messages-logs";
export const ALERTS_LOGS = "twilio-alerts-logs";
export const CALL_SUMMARIES_LOGS = "twilio-call-summaries-logs";
