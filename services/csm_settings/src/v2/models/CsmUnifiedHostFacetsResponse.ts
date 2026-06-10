import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CsmUnifiedHostFacetData } from "./CsmUnifiedHostFacetData";

/**
 * The response returned when listing facets for unified hosts.
 */
export class CsmUnifiedHostFacetsResponse {
  /**
   * The list of available facets for unified hosts.
   */
  "data": Array<CsmUnifiedHostFacetData>;
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
      type: "Array<CsmUnifiedHostFacetData>",
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
    return CsmUnifiedHostFacetsResponse.attributeTypeMap;
  }

  public constructor() {}
}
