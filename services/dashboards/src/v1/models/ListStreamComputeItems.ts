import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListStreamComputeAggregation } from "./ListStreamComputeAggregation";

/**
 * List of facets and aggregations which to compute.
 */
export class ListStreamComputeItems {
  /**
   * Aggregation value.
   */
  "aggregation": ListStreamComputeAggregation;
  /**
   * Facet name.
   */
  "facet"?: string;
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
    aggregation: {
      baseName: "aggregation",
      type: "ListStreamComputeAggregation",
      required: true,
    },
    facet: {
      baseName: "facet",
      type: "string",
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
    return ListStreamComputeItems.attributeTypeMap;
  }

  public constructor() {}
}
