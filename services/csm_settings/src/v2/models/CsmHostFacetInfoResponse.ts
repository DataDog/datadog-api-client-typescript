import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmHostFacetInfoData } from "./CsmHostFacetInfoData";

/**
 * The response returned when requesting value distribution for a specific facet.
 */
export class CsmHostFacetInfoResponse {
  /**
   * The data wrapper for a facet info response.
   */
  "data": CsmHostFacetInfoData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "CsmHostFacetInfoData",
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
    return CsmHostFacetInfoResponse.attributeTypeMap;
  }

  public constructor() {}
}
