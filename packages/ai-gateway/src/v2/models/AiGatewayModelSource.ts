import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * How a model catalog entry is managed.
 */
export type AiGatewayModelSource =
  | typeof DISCOVERED
  | typeof MANUAL
  | UnparsedObject;
export const DISCOVERED = "discovered";
export const MANUAL = "manual";
