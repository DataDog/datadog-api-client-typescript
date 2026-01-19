import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PostmortemCellDefinition } from "./PostmortemCellDefinition";

/**
 * Attributes of a postmortem cell
 */
export class PostmortemCellAttributes {
  /**
   * Definition of a postmortem cell
   */
  "definition"?: PostmortemCellDefinition;
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
    definition: {
      baseName: "definition",
      type: "PostmortemCellDefinition",
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
    return PostmortemCellAttributes.attributeTypeMap;
  }

  public constructor() {}
}
