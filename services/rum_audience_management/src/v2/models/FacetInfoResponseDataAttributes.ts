import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FacetInfoResponseDataAttributesResult } from "./FacetInfoResponseDataAttributesResult";

/**
 * Attributes of the facet info response, containing the facet result data.
 */
export class FacetInfoResponseDataAttributes {
  /**
   * The facet query result containing discrete value counts or a numeric range for the requested facet.
   */
  "result"?: FacetInfoResponseDataAttributesResult;
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
    result: {
      baseName: "result",
      type: "FacetInfoResponseDataAttributesResult",
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
    return FacetInfoResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
