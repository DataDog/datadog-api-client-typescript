import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CycloneDXMetadataComponent } from "./CycloneDXMetadataComponent";
import { CycloneDXMetadataTools } from "./CycloneDXMetadataTools";

/**
 * Metadata about the BOM, including the scanned asset and the scanner tool.
 */
export class CycloneDXMetadata {
  /**
   * The asset that was scanned (for example, a host or container image).
   */
  "component": CycloneDXMetadataComponent;
  /**
   * Information about the scanner tool that produced this BOM.
   */
  "tools": CycloneDXMetadataTools;
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
      type: "CycloneDXMetadataComponent",
      required: true,
    },
    tools: {
      baseName: "tools",
      type: "CycloneDXMetadataTools",
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
