import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `ItemApiPayloadDataAttributes` object.
 */
export class ItemApiPayloadDataAttributes {
  /**
   * The `attributes` `created_at`.
   */
  "createdAt"?: Date;
  /**
   * The `attributes` `modified_at`.
   */
  "modifiedAt"?: Date;
  /**
   * The `attributes` `org_id`.
   */
  "orgId"?: number;
  /**
   * The `attributes` `primary_column_name`.
   */
  "primaryColumnName"?: string;
  /**
   * The `attributes` `signature`.
   */
  "signature"?: string;
  /**
   * The `attributes` `store_id`.
   */
  "storeId"?: string;
  /**
   * The `attributes` `value`.
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
