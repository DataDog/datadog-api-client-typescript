import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineMetricEnrichmentTableMetricNameLookupType } from "./ObservabilityPipelineMetricEnrichmentTableMetricNameLookupType";

/**
 * Uses the metric name as the lookup key for enrichment table matching.
 */
export class ObservabilityPipelineMetricEnrichmentTableMetricNameLookup {
  /**
   * The lookup source type. The value should always be `metric_name`.
   */
  "type": ObservabilityPipelineMetricEnrichmentTableMetricNameLookupType;
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
    type: {
      baseName: "type",
      type: "ObservabilityPipelineMetricEnrichmentTableMetricNameLookupType",
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
    return ObservabilityPipelineMetricEnrichmentTableMetricNameLookup.attributeTypeMap;
  }

  public constructor() {}
}
