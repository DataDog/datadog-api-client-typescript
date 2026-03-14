import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FacetInfoResponseDataAttributesResultRange } from "./FacetInfoResponseDataAttributesResultRange";
import { FacetInfoResponseDataAttributesResultValuesItems } from "./FacetInfoResponseDataAttributesResultValuesItems";

/**
 * The facet query result containing discrete value counts or a numeric range for the requested facet.
 */
export class FacetInfoResponseDataAttributesResult {
  /**
   * The numeric range of a facet attribute, representing the minimum and maximum observed values.
   */
  "range"?: FacetInfoResponseDataAttributesResultRange;
  /**
   * List of discrete facet values with their occurrence counts.
   */
  "values"?: Array<FacetInfoResponseDataAttributesResultValuesItems>;
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
    range: {
      baseName: "range",
      type: "FacetInfoResponseDataAttributesResultRange",
    },
    values: {
      baseName: "values",
      type: "Array<FacetInfoResponseDataAttributesResultValuesItems>",
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
    return FacetInfoResponseDataAttributesResult.attributeTypeMap;
  }

  public constructor() {}
}
