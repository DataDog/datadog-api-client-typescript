import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Column values for this row in the reference table.
 */
export class TableRowResourceDataAttributes {
  /**
   * Key-value pairs representing the row data, where keys are field names from the schema.
   */
  "values"?: any;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    values: {
      baseName: "values",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableRowResourceDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
