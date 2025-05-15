import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Tag filter for the budget's entries.
 */
export class TagFilter {
  /**
   * The key of the tag.
   */
  "tagKey"?: string;
  /**
   * The value of the tag.
   */
  "tagValue"?: string;
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
    tagKey: {
      baseName: "tag_key",
      type: "string",
    },
    tagValue: {
      baseName: "tag_value",
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
    return TagFilter.attributeTypeMap;
  }

  public constructor() {}
}
