import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SBOMMetadataAuthor } from "./SBOMMetadataAuthor";
import { SBOMMetadataComponent } from "./SBOMMetadataComponent";

/**
 * Provides additional information about a BOM.
 */
export class SBOMMetadata {
  /**
   * List of authors of the SBOM.
   */
  "authors"?: Array<SBOMMetadataAuthor>;
  /**
   * The component that the BOM describes.
   */
  "component"?: SBOMMetadataComponent;
  /**
   * The timestamp of the SBOM creation.
   */
  "timestamp"?: string;
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
    authors: {
      baseName: "authors",
      type: "Array<SBOMMetadataAuthor>",
    },
    component: {
      baseName: "component",
      type: "SBOMMetadataComponent",
    },
    timestamp: {
      baseName: "timestamp",
      type: "string",
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
    return SBOMMetadata.attributeTypeMap;
  }

  public constructor() {}
}
