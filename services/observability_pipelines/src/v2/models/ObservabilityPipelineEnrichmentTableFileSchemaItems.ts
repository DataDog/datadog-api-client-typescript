import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineEnrichmentTableFileSchemaItemsType } from "./ObservabilityPipelineEnrichmentTableFileSchemaItemsType";

/**
 * Describes a single column and its type in an enrichment table schema.
 */
export class ObservabilityPipelineEnrichmentTableFileSchemaItems {
  /**
   * The `items` `column`.
   */
  "column": string;
  /**
   * Declares allowed data types for enrichment table columns.
   */
  "type": ObservabilityPipelineEnrichmentTableFileSchemaItemsType;
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
    type: {
      baseName: "type",
      type: "ObservabilityPipelineEnrichmentTableFileSchemaItemsType",
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
    return ObservabilityPipelineEnrichmentTableFileSchemaItems.attributeTypeMap;
  }

  public constructor() {}
}
