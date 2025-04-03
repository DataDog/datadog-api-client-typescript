import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Writable attributes of an Org Config.
 */
export class OrgConfigWriteAttributes {
  /**
   * The value of an Org Config.
   */
  "value": any;
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
    value: {
      baseName: "value",
      type: "any",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OrgConfigWriteAttributes.attributeTypeMap;
  }

  public constructor() {}
}
