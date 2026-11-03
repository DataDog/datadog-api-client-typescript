import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration of a Snowflake connection.
 */
export class ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake {
  /**
   * Identifier of the Snowflake account.
   */
  "accountId"?: string;
  /**
   * Name of the Snowflake database.
   */
  "databaseName"?: string;
  /**
   * Name of the Snowflake schema.
   */
  "schema"?: string;
  /**
   * Name of the Snowflake table.
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
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    databaseName: {
      baseName: "database_name",
      type: "string",
    },
    schema: {
      baseName: "schema",
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
    return ListConnectionsResponseDataAttributesConnectionsItemsDetailsSnowflake.attributeTypeMap;
  }

  public constructor() {}
}
