import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `ItemApiPayloadMetaSchemaField` object.
 */
export class ItemApiPayloadMetaSchemaField {
  /**
   * The `ItemApiPayloadMetaSchemaField` `name`.
   */
  "name": string;
  /**
   * The `ItemApiPayloadMetaSchemaField` `type`.
   */
  "type": string;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
      required: true,
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
    return ItemApiPayloadMetaSchemaField.attributeTypeMap;
  }

  public constructor() {}
}
