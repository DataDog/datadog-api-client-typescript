import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ItemApiPayloadMetaSchemaField } from "./ItemApiPayloadMetaSchemaField";

/**
 * Schema information about the datastore, including its primary key and field definitions.
 */
export class ItemApiPayloadMetaSchema {
  /**
   * An array describing the columns available in this datastore.
   */
  "fields"?: Array<ItemApiPayloadMetaSchemaField>;
  /**
   * The name of the primary key column for this datastore.
   */
  "primaryKey"?: string;
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
    fields: {
      baseName: "fields",
      type: "Array<ItemApiPayloadMetaSchemaField>",
    },
    primaryKey: {
      baseName: "primary_key",
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
    return ItemApiPayloadMetaSchema.attributeTypeMap;
  }

  public constructor() {}
}
