import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration of a reference table connection.
 */
export class ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable {
  /**
   * Identifier of the reference table.
   */
  "tableId"?: string;
  /**
   * Name of the reference table.
   */
  "tableName"?: string;
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
    tableId: {
      baseName: "table_id",
      type: "string",
    },
    tableName: {
      baseName: "table_name",
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
    return ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable.attributeTypeMap;
  }

  public constructor() {}
}
