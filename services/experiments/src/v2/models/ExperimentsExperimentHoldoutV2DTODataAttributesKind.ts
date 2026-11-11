import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether Datadog serves the holdout. Datadog serves MANAGED holdouts. EXTERNAL holdouts record what your own feature flagging system holds back, and Datadog does not serve them.
 */
export type ExperimentsExperimentHoldoutV2DTODataAttributesKind =
  | typeof MANAGED
  | typeof EXTERNAL
  | typeof UNKNOWN
  | UnparsedObject;
export const MANAGED = "MANAGED";
export const EXTERNAL = "EXTERNAL";
export const UNKNOWN = "UNKNOWN";
