import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. Always `crowdstrike_fdr`.
 */
export type ObservabilityPipelineCrowdStrikeFdrSourceType =
  | typeof CROWDSTRIKE_FDR
  | UnparsedObject;
export const CROWDSTRIKE_FDR = "crowdstrike_fdr";
