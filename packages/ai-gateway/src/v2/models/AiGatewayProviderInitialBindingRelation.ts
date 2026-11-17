import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Provider access relation. Editor also grants View.
 */
export type AiGatewayProviderInitialBindingRelation =
  | typeof VIEWER
  | typeof EDITOR
  | UnparsedObject;
export const VIEWER = "viewer";
export const EDITOR = "editor";
