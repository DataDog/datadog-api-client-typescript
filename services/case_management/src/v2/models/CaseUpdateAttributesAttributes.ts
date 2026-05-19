import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Case update attributes attributes
 */
export class CaseUpdateAttributesAttributes {
  /**
   * Key-value pairs of case attributes. Each key maps to an array of string values, used for flexible metadata such as labels or tags.
   */
  "attributes": { [key: string]: Array<string> };
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
    attributes: {
      baseName: "attributes",
      type: "{ [key: string]: Array<string>; }",
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
    return CaseUpdateAttributesAttributes.attributeTypeMap;
  }

  public constructor() {}
}
