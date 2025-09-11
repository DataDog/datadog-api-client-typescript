import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Information about a specific column in the datastore schema.
 */
export class ItemApiPayloadMetaSchemaField {
  /**
   * The name of this column in the datastore.
   */
  "name": string;
  /**
   * The data type of this column. For example, 'string', 'number', or 'boolean'.
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
