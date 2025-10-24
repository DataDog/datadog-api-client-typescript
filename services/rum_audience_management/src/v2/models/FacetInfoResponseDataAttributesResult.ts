import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FacetInfoResponseDataAttributesResultRange } from "./FacetInfoResponseDataAttributesResultRange";
import { FacetInfoResponseDataAttributesResultValuesItems } from "./FacetInfoResponseDataAttributesResultValuesItems";

export class FacetInfoResponseDataAttributesResult {
  "range"?: FacetInfoResponseDataAttributesResultRange;
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
