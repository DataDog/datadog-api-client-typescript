import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FacetResponseData } from "./FacetResponseData";
import { ListFacetsResponseMeta } from "./ListFacetsResponseMeta";

/**
 * Response containing a list of facets.
 */
export class ListFacetsResponse {
  /**
   * Array of facets.
   */
  "data": Array<FacetResponseData>;
  /**
   * Metadata for facets response.
   */
  "meta": ListFacetsResponseMeta;
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
      type: "Array<FacetResponseData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ListFacetsResponseMeta",
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
    return ListFacetsResponse.attributeTypeMap;
  }

  public constructor() {}
}
