import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The client type for action filtering.
 */
export type ClientType =
  | typeof WORKFLOWS
  | typeof APP_BUILDER
  | typeof ACTIONS_API
  | UnparsedObject;
export const WORKFLOWS = "workflows";
export const APP_BUILDER = "app_builder";
export const ACTIONS_API = "actions_api";
