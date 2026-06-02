import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The Statuspage URL setting attributes for a create request.
 */
export class StatuspageUrlSettingCreateAttributes {
  /**
   * Comma-separated list of custom tags to apply to events generated from this Statuspage URL.
   */
  "customTags": string;
  /**
   * The Statuspage URL to monitor. Must be a `status.io` or `statuspage.com` URL.
   */
  "url": string;
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
      required: true,
    },
    url: {
      baseName: "url",
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
    return StatuspageUrlSettingCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
