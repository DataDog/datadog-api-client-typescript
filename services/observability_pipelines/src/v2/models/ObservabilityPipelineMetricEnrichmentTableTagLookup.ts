import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineMetricEnrichmentTableTagLookupType } from "./ObservabilityPipelineMetricEnrichmentTableTagLookupType";

/**
 * Uses a metric tag as the lookup key for enrichment table matching.
 */
export class ObservabilityPipelineMetricEnrichmentTableTagLookup {
  /**
   * The Datadog tag key used as the lookup key.
   */
  "name": string;
  /**
   * The lookup source type. The value should always be `tag`.
   */
  "type": ObservabilityPipelineMetricEnrichmentTableTagLookupType;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineMetricEnrichmentTableTagLookupType",
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
    return ObservabilityPipelineMetricEnrichmentTableTagLookup.attributeTypeMap;
  }

  public constructor() {}
}
