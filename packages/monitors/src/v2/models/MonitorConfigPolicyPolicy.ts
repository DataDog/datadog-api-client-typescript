import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { MonitorConfigPolicyDowntimePolicy } from "./MonitorConfigPolicyDowntimePolicy";
import { MonitorConfigPolicyTagPolicy } from "./MonitorConfigPolicyTagPolicy";

/**
 * Configuration for the policy.
 */
export type MonitorConfigPolicyPolicy =
  | MonitorConfigPolicyTagPolicy
  | MonitorConfigPolicyDowntimePolicy
  | UnparsedObject;
