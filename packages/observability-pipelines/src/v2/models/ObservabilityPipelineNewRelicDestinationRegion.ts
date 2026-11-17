import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The New Relic region.
 */
export type ObservabilityPipelineNewRelicDestinationRegion =
  | typeof US
  | typeof EU
  | UnparsedObject;
export const US = "us";
export const EU = "eu";
