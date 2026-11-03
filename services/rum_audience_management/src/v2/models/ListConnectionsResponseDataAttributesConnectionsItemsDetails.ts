import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable } from "./ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable";
import { ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake } from "./ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake";

/**
 * Type-specific configuration of the connection. Only the field matching the connection type is set.
 */
export class ListConnectionsResponseDataAttributesConnectionsItemsDetails {
  /**
   * Configuration of a reference table connection.
   */
  "refTable"?: ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable;
  /**
   * Configuration of a Snowflake connection.
   */
  "snowflake"?: ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake;
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
    refTable: {
      baseName: "ref_table",
      type: "ListConnectionsResponseDataAttributesConnectionsItemsDetailsRefTable",
    },
    snowflake: {
      baseName: "snowflake",
      type: "ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake",
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
    return ListConnectionsResponseDataAttributesConnectionsItemsDetails.attributeTypeMap;
  }

  public constructor() {}
}
