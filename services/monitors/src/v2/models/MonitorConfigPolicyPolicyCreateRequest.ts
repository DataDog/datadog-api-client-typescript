import { UnparsedObject } from "@datadog/datadog-api-client";

import { MonitorConfigPolicyDowntimePolicyCreateRequest } from "./MonitorConfigPolicyDowntimePolicyCreateRequest";
import { MonitorConfigPolicyTagPolicyCreateRequest } from "./MonitorConfigPolicyTagPolicyCreateRequest";

/**
 * Configuration for the policy.
 */
export type MonitorConfigPolicyPolicyCreateRequest =
  | MonitorConfigPolicyTagPolicyCreateRequest
  | MonitorConfigPolicyDowntimePolicyCreateRequest
  | UnparsedObject;
