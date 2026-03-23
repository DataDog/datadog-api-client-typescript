import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FacetInfoRequestData } from "./FacetInfoRequestData";

/**
 * Request body for retrieving facet value information for a specified attribute with optional filtering.
 */
export class FacetInfoRequest {
  /**
   * The data object containing the resource type and attributes for the facet info request.
   */
  "data"?: FacetInfoRequestData;
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
      type: "FacetInfoRequestData",
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
    return FacetInfoRequest.attributeTypeMap;
  }

  public constructor() {}
}
