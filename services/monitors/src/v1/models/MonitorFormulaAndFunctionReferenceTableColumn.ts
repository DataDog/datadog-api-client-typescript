import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A column definition for reference table queries.
 */
export class MonitorFormulaAndFunctionReferenceTableColumn {
  /**
   * Optional alias for the column.
   */
  "alias"?: string;
  /**
   * Name of the column.
   */
  "name": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorFormulaAndFunctionReferenceTableColumn.attributeTypeMap;
  }

  public constructor() {}
}
