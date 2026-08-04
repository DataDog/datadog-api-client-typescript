/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
