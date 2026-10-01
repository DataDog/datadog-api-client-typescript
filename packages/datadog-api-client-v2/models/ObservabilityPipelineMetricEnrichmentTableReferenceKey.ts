/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineMetricEnrichmentTableLookupSource } from "./ObservabilityPipelineMetricEnrichmentTableLookupSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the metric lookup value used as the reference-table row ID.
 */
export class ObservabilityPipelineMetricEnrichmentTableReferenceKey {
  /**
   * Specifies the source of the key value used for metric enrichment table lookups.
   * The lookup key can be either the metric name or a metric tag.
   */
  "source": ObservabilityPipelineMetricEnrichmentTableLookupSource;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    source: {
      baseName: "source",
      type: "ObservabilityPipelineMetricEnrichmentTableLookupSource",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ObservabilityPipelineMetricEnrichmentTableReferenceKey.attributeTypeMap;
  }

  public constructor() {}
}
