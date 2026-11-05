import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Access relation granted on a model group.
 */
export type AiGatewayModelGroupBindingRelation =
  | typeof VIEWER
  | typeof RUNNER
  | typeof EDITOR
  | UnparsedObject;
export const VIEWER = "viewer";
export const RUNNER = "runner";
export const EDITOR = "editor";
