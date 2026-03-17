import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The numeric range of a facet attribute, representing the minimum and maximum observed values.
 */
export class FacetInfoResponseDataAttributesResultRange {
  /**
   * The maximum observed value for the numeric facet attribute.
   */
  "max"?: any;
  /**
   * The minimum observed value for the numeric facet attribute.
   */
  "min"?: any;
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
    max: {
      baseName: "max",
      type: "any",
    },
    min: {
      baseName: "min",
      type: "any",
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
    return FacetInfoResponseDataAttributesResultRange.attributeTypeMap;
  }

  public constructor() {}
}
