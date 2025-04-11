import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppTestLevel } from "./CIAppTestLevel";

/**
 * JSON object containing all event attributes and their associated values.
 */
export class CIAppEventAttributes {
  /**
   * JSON object of attributes from CI Visibility test events.
   */
  "attributes"?: { [key: string]: any };
  /**
   * Array of tags associated with your event.
   */
  "tags"?: Array<string>;
  /**
   * Test run level.
   */
  "testLevel"?: CIAppTestLevel;
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
      type: "{ [key: string]: any; }",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    testLevel: {
      baseName: "test_level",
      type: "CIAppTestLevel",
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
    return CIAppEventAttributes.attributeTypeMap;
  }

  public constructor() {}
}
