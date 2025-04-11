import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Synthetic location that can be used when creating or editing a
 * test.
 */
export class SyntheticsLocation {
  /**
   * Unique identifier of the location.
   */
  "id"?: string;
  /**
   * Name of the location.
   */
  "name"?: string;
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
    },
    name: {
      baseName: "name",
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
    return SyntheticsLocation.attributeTypeMap;
  }

  public constructor() {}
}
