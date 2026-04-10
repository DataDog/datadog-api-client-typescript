/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineEnrichmentTableFieldEventLookup } from "./ObservabilityPipelineEnrichmentTableFieldEventLookup";
import { ObservabilityPipelineEnrichmentTableFieldSecretLookup } from "./ObservabilityPipelineEnrichmentTableFieldSecretLookup";
import { ObservabilityPipelineEnrichmentTableFieldVrlLookup } from "./ObservabilityPipelineEnrichmentTableFieldVrlLookup";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
