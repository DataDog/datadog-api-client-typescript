import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineEnrichmentTableFileKeyItemsComparison } from "./ObservabilityPipelineEnrichmentTableFileKeyItemsComparison";

/**
 * Defines how to map log fields to enrichment table columns during lookups.
 */
export class ObservabilityPipelineEnrichmentTableFileKeyItems {
  /**
   * The `items` `column`.
   */
  "column": string;
  /**
   * Defines how to compare key fields for enrichment table lookups.
   */
  "comparison": ObservabilityPipelineEnrichmentTableFileKeyItemsComparison;
  /**
   * The `items` `field`.
   */
  "field": string;
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
    comparison: {
      baseName: "comparison",
      type: "ObservabilityPipelineEnrichmentTableFileKeyItemsComparison",
      required: true,
    },
    field: {
      baseName: "field",
      type: "string",
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
    return ObservabilityPipelineEnrichmentTableFileKeyItems.attributeTypeMap;
  }

  public constructor() {}
}
