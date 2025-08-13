import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `crowdstrike_next_gen_siem`.
 */
export type ObservabilityPipelineCrowdStrikeNextGenSiemDestinationType =
  | typeof CROWDSTRIKE_NEXT_GEN_SIEM
  | UnparsedObject;
export const CROWDSTRIKE_NEXT_GEN_SIEM = "crowdstrike_next_gen_siem";
