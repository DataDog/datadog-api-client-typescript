import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A recommendation field selected by the request's `extra_fields` patterns.
 */
export class CostRecommendationExtraField {
  /**
   * Dotted path of the matched field in the recommendation event's custom attributes.
   */
  "path": string;
  /**
   * Matched JSON value. Paths through arrays return the matched values as an array.
   */
  "value": any;
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
    path: {
      baseName: "path",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "any",
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
    return CostRecommendationExtraField.attributeTypeMap;
  }

  public constructor() {}
}
