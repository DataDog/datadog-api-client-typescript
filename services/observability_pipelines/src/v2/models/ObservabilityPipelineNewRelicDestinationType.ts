import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `new_relic`.
 */
export type ObservabilityPipelineNewRelicDestinationType =
  | typeof NEW_RELIC
  | UnparsedObject;
export const NEW_RELIC = "new_relic";
