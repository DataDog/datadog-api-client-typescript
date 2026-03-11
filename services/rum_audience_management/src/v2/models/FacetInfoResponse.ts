import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FacetInfoResponseData } from "./FacetInfoResponseData";

/**
 * Response containing facet information for an attribute, including its distinct values and occurrence counts.
 */
export class FacetInfoResponse {
  /**
   * The data object containing the resource type and attributes for the facet info response.
   */
  "data"?: FacetInfoResponseData;
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
      type: "FacetInfoResponseData",
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
    return FacetInfoResponse.attributeTypeMap;
  }

  public constructor() {}
}
