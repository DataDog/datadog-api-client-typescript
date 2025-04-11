import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CIAppPipelineLevel } from "./CIAppPipelineLevel";

/**
 * JSON object containing all event attributes and their associated values.
 */
export class CIAppPipelineEventAttributes {
  /**
   * JSON object of attributes from CI Visibility pipeline events.
   */
  "attributes"?: { [key: string]: any };
  /**
   * Pipeline execution level.
   */
  "ciLevel"?: CIAppPipelineLevel;
  /**
   * Array of tags associated with your event.
   */
  "tags"?: Array<string>;
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
    ciLevel: {
      baseName: "ci_level",
      type: "CIAppPipelineLevel",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return CIAppPipelineEventAttributes.attributeTypeMap;
  }

  public constructor() {}
}
