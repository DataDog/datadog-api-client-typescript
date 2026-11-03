import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The numeric range of a facet attribute, representing the minimum and maximum observed values.
 */
export class FacetInfoResponseDataAttributesResultRange {
  /**
   * The maximum observed value for the numeric facet attribute. Null when no records match.
   */
  "max"?: number;
  /**
   * The minimum observed value for the numeric facet attribute. Null when no records match.
   */
  "min"?: number;
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
      type: "number",
      format: "double",
    },
    min: {
      baseName: "min",
      type: "number",
      format: "double",
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
