import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class UserDefinedLink {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "label": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "link": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    label: {
      baseName: "label",
      type: "string",
      required: true,
    },
    link: {
      baseName: "link",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserDefinedLink.attributeTypeMap;
  }

  public constructor() {}
}
