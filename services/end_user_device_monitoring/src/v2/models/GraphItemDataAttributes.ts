import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GraphItemDataAttributesCountsItems } from "./GraphItemDataAttributesCountsItems";

/**
 * Attributes of a single grouping in the End User Device Monitoring graph response.
 */
export class GraphItemDataAttributes {
  /**
   * List of per-value counts for the grouping column.
   */
  "counts"?: Array<GraphItemDataAttributesCountsItems>;
  /**
   * Identifier of the grouping column (for example, `os` or `type`).
   */
  "type"?: string;
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
    counts: {
      baseName: "counts",
      type: "Array<GraphItemDataAttributesCountsItems>",
    },
    type: {
      baseName: "type",
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
    return GraphItemDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
