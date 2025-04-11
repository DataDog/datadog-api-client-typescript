import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SBOM } from "./SBOM";

/**
 * The expected response schema when getting an SBOM.
 */
export class GetSBOMResponse {
  /**
   * A single SBOM
   */
  "data": SBOM;
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
    data: {
      baseName: "data",
      type: "SBOM",
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
    return GetSBOMResponse.attributeTypeMap;
  }

  public constructor() {}
}
