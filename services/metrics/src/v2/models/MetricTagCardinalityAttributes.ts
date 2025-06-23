import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An object containing properties related to the tag key
 */
export class MetricTagCardinalityAttributes {
  /**
   * This describes the recent change in the tag keys cardinality
   */
  "cardinalityDelta"?: number;
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
    cardinalityDelta: {
      baseName: "cardinality_delta",
      type: "number",
      format: "int64",
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
    return MetricTagCardinalityAttributes.attributeTypeMap;
  }

  public constructor() {}
}
