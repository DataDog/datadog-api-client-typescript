import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A central interval around point_estimate at confidence_level.
 */
export class ExperimentsBanditConfidenceIntervalV2 {
  /**
   * Lower bound of the interval.
   */
  "lower": number;
  /**
   * Upper bound of the interval.
   */
  "upper": number;
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
    lower: {
      baseName: "lower",
      type: "number",
      required: true,
      format: "double",
    },
    upper: {
      baseName: "upper",
      type: "number",
      required: true,
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
    return ExperimentsBanditConfidenceIntervalV2.attributeTypeMap;
  }

  public constructor() {}
}
