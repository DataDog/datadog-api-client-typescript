import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CycloneDXToolComponent } from "./CycloneDXToolComponent";

/**
 * Tools used to generate the BOM.
 */
export class CycloneDXTools {
  /**
   * List of tool components. Only one tool is supported.
   */
  "components": [CycloneDXToolComponent];
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
    components: {
      baseName: "components",
      type: "[CycloneDXToolComponent]",
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
    return CycloneDXTools.attributeTypeMap;
  }

  public constructor() {}
}
