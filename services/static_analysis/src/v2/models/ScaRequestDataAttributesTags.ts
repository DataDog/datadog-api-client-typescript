import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaRequestDataAttributesTagsTool } from "./ScaRequestDataAttributesTagsTool";

/**
 * A map of tags providing additional metadata for the SCA scan.
 */
export class ScaRequestDataAttributesTags {
  /**
   * Tool metadata included in SCA tags.
   */
  "tool"?: ScaRequestDataAttributesTagsTool;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: string };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    tool: {
      baseName: "tool",
      type: "ScaRequestDataAttributesTagsTool",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: string; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScaRequestDataAttributesTags.attributeTypeMap;
  }

  public constructor() {}
}
