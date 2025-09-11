import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata and content of a datastore item.
 */
export class ItemApiPayloadDataAttributes {
  /**
   * Timestamp when the item was first created.
   */
  "createdAt"?: Date;
  /**
   * Timestamp when the item was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * The ID of the organization that owns this item.
   */
  "orgId"?: number;
  /**
   * The name of the primary key column for this datastore. Primary column names:
   *   - Must abide by both [PostgreSQL naming conventions](https://www.postgresql.org/docs/7.0/syntax525.htm)
   *   - Cannot exceed 63 characters
   */
  "primaryColumnName"?: string;
  /**
   * A unique signature identifying this item version.
   */
  "signature"?: string;
  /**
   * The unique identifier of the datastore containing this item.
   */
  "storeId"?: string;
  /**
   * The data content (as key-value pairs) of a datastore item.
   */
  "value"?: { [key: string]: any };
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    orgId: {
      baseName: "org_id",
      type: "number",
      format: "int64",
    },
    primaryColumnName: {
      baseName: "primary_column_name",
      type: "string",
    },
    signature: {
      baseName: "signature",
      type: "string",
    },
    storeId: {
      baseName: "store_id",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "{ [key: string]: any; }",
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
    return ItemApiPayloadDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
