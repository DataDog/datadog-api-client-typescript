import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CycloneDXToolComponent } from "./CycloneDXToolComponent";

/**
 * Information about the scanner tool that produced this BOM.
 */
export class CycloneDXMetadataTools {
  /**
   * The scanner tool components. Must contain exactly one element.
   */
  "components": Array<CycloneDXToolComponent>;
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
      type: "Array<CycloneDXToolComponent>",
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
    return CycloneDXMetadataTools.attributeTypeMap;
  }

  public constructor() {}
}
