import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * In this object, the key is the tag, the value is a list of host names that are reporting that tag.
 */
export class TagToHosts {
  /**
   * A list of tags to apply to the host.
   */
  "tags"?: { [key: string]: Array<string> };
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
    tags: {
      baseName: "tags",
      type: "{ [key: string]: Array<string>; }",
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
    return TagToHosts.attributeTypeMap;
  }

  public constructor() {}
}
