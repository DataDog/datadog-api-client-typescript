import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineMetricEnrichmentTableLookupSource } from "./ObservabilityPipelineMetricEnrichmentTableLookupSource";

/**
 * Defines how to map a metric lookup value to a CSV column during enrichment table lookups.
 */
export class ObservabilityPipelineMetricEnrichmentTableFileKey {
  /**
   * The CSV column name or index to match against the lookup value.
   */
  "column": string;
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
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
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
    return ObservabilityPipelineMetricEnrichmentTableFileKey.attributeTypeMap;
  }

  public constructor() {}
}
