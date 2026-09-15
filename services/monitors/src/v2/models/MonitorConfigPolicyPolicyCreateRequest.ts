import { UnparsedObject } from "@datadog/datadog-api-client";

import { MonitorConfigPolicyTagPolicyCreateRequest } from "./MonitorConfigPolicyTagPolicyCreateRequest";

/**
 * Configuration for the policy.
 */
export type MonitorConfigPolicyPolicyCreateRequest =
  | MonitorConfigPolicyTagPolicyCreateRequest
  | UnparsedObject;
