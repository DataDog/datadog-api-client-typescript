import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class UserJourneySearchJoinKeys {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "primary": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "secondary"?: Array<string>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    primary: {
      baseName: "primary",
      type: "string",
      required: true,
    },
    secondary: {
      baseName: "secondary",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserJourneySearchJoinKeys.attributeTypeMap;
  }

  public constructor() {}
}
