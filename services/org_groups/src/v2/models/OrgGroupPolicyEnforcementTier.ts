import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The enforcement tier of the policy. `OVERRIDE_ALLOWED` means the policy is set but member orgs may mutate it. `GROUP_MANAGED` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value. `role` policies only support `GROUP_MANAGED` and `DELEGATE` — `OVERRIDE_ALLOWED` is rejected for this policy type. Transitioning a `role` policy to `DELEGATE` (disabling it) is one-way — the policy cannot be transitioned back to `GROUP_MANAGED` afterward.
 */
export type OrgGroupPolicyEnforcementTier =
  | typeof OVERRIDE_ALLOWED
  | typeof GROUP_MANAGED
  | typeof DELEGATE
  | UnparsedObject;
export const OVERRIDE_ALLOWED = "OVERRIDE_ALLOWED";
export const GROUP_MANAGED = "GROUP_MANAGED";
export const DELEGATE = "DELEGATE";
