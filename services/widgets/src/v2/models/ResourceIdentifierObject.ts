import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A JSON:API "resource identifier object"
 * See: https://jsonapi.org/format/#document-resource-identifier-objects
 */
export class ResourceIdentifierObject {
  "id": string;
  "meta"?: { [key: string]: any };
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: any; }",
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
    return ResourceIdentifierObject.attributeTypeMap;
  }

  public constructor() {}
}
