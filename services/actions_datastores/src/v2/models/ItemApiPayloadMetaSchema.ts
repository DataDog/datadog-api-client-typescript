import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ItemApiPayloadMetaSchemaField } from "./ItemApiPayloadMetaSchemaField";

/**
 * The definition of `ItemApiPayloadMetaSchema` object.
 */
export class ItemApiPayloadMetaSchema {
  /**
   * The `ItemApiPayloadMetaSchema` `fields`.
   */
  "fields"?: Array<ItemApiPayloadMetaSchemaField>;
  /**
   * The `ItemApiPayloadMetaSchema` `primary_key`.
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
