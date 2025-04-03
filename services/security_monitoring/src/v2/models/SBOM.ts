import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SBOMAttributes } from "./SBOMAttributes";
import { SBOMType } from "./SBOMType";

/**
 * A single SBOM
 */
export class SBOM {
  /**
   * The JSON:API attributes of the SBOM.
   */
  "attributes"?: SBOMAttributes;
  /**
   * The unique ID for this SBOM (it is equivalent to the `asset_name` or `asset_name@repo_digest` (Image)
   */
  "id"?: string;
  /**
   * The JSON:API type.
   */
  "type"?: SBOMType;
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
      type: "SBOMAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SBOMType",
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
    return SBOM.attributeTypeMap;
  }

  public constructor() {}
}
