import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotebookSearchAggregations } from "./NotebookSearchAggregations";

/**
 * Metadata about the notebook search results.
 */
export class NotebookSearchResponseMeta {
  /**
   * Aggregations of notebook search results.
   */
  "aggregations"?: NotebookSearchAggregations;
  /**
   * Total number of notebooks found.
   */
  "total": number;
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
    aggregations: {
      baseName: "aggregations",
      type: "NotebookSearchAggregations",
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
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
    return NotebookSearchResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
