import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CycloneDXAssetComponent } from "./CycloneDXAssetComponent";
import { CycloneDXTools } from "./CycloneDXTools";

/**
 * Metadata for the CycloneDX BOM.
 */
export class CycloneDXMetadata {
  /**
   * The asset component represents the system or host being scanned.
   */
  "component": CycloneDXAssetComponent;
  /**
   * Tools used to generate the BOM.
   */
  "tools": CycloneDXTools;
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
    component: {
      baseName: "component",
      type: "CycloneDXAssetComponent",
      required: true,
    },
    tools: {
      baseName: "tools",
      type: "CycloneDXTools",
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
    return CycloneDXMetadata.attributeTypeMap;
  }

  public constructor() {}
}
