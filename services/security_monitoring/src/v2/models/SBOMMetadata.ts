import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SBOMMetadataComponent } from "./SBOMMetadataComponent";

/**
 * Provides additional information about a BOM.
 */
export class SBOMMetadata {
  /**
   * The component that the BOM describes.
   */
  "component"?: SBOMMetadataComponent;
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
      type: "SBOMMetadataComponent",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SBOMMetadata.attributeTypeMap;
  }

  public constructor() {}
}
