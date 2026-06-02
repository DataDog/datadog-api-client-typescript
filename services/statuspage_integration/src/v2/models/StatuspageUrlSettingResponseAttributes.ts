import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes from a Statuspage URL setting response.
 */
export class StatuspageUrlSettingResponseAttributes {
  /**
   * Comma-separated list of custom tags applied to events generated from this Statuspage URL.
   */
  "customTags"?: string;
  /**
   * The Statuspage URL being monitored.
   */
  "url"?: string;
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
    customTags: {
      baseName: "custom_tags",
      type: "string",
    },
    url: {
      baseName: "url",
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
    return StatuspageUrlSettingResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
