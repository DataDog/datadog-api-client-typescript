import { UnparsedObject } from "@datadog/datadog-api-client";

import { MonitorConfigPolicyTagPolicy } from "./MonitorConfigPolicyTagPolicy";

/**
 * Configuration for the policy.
 */
export type MonitorConfigPolicyPolicy =
  | MonitorConfigPolicyTagPolicy
  | UnparsedObject;
