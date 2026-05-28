import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Count of devices for a single value of the grouping column in the End User Device Monitoring graph.
 */
export class GraphItemDataAttributesCountsItems {
  /**
   * Value of the grouping column for this bucket (for example, an operating system
   * name or a device type).
   */
  "columnName"?: string;
  /**
   * Number of devices that fall into this bucket.
   */
  "count"?: number;
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
    columnName: {
      baseName: "columnName",
      type: "string",
    },
    count: {
      baseName: "count",
      type: "number",
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
    return GraphItemDataAttributesCountsItems.attributeTypeMap;
  }

  public constructor() {}
}
