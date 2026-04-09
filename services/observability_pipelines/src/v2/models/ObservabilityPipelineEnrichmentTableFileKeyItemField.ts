import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineEnrichmentTableFieldEventLookup } from "./ObservabilityPipelineEnrichmentTableFieldEventLookup";
import { ObservabilityPipelineEnrichmentTableFieldSecretLookup } from "./ObservabilityPipelineEnrichmentTableFieldSecretLookup";
import { ObservabilityPipelineEnrichmentTableFieldVrlLookup } from "./ObservabilityPipelineEnrichmentTableFieldVrlLookup";

/**
 * Specifies the source of the key value used for enrichment table lookups.
 * Can be a plain field path string or an object specifying `event`, `vrl`, or `secret`.
 */
export type ObservabilityPipelineEnrichmentTableFileKeyItemField =
  | string
  | ObservabilityPipelineEnrichmentTableFieldEventLookup
  | ObservabilityPipelineEnrichmentTableFieldVrlLookup
  | ObservabilityPipelineEnrichmentTableFieldSecretLookup
  | UnparsedObject;
