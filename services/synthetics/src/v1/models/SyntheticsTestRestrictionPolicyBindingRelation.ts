import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of relation for the binding.
 */
export type SyntheticsTestRestrictionPolicyBindingRelation =
  | typeof EDITOR
  | typeof VIEWER
  | UnparsedObject;
export const EDITOR = "editor";
export const VIEWER = "viewer";
