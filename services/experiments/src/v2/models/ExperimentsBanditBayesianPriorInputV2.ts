import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The prior the bandit's estimates start from, in the metric's units. Omitted fields keep their current values, or their defaults on create. A change takes effect on the next refresh.
 */
export class ExperimentsBanditBayesianPriorInputV2 {
  /**
   * Prior standard deviation of each arm's mean around the shared mean. Must be between 1e-12 and 1e12. Defaults to 100.
   */
  "armStandardDeviation"?: number;
  /**
   * Prior mean of the shared mean of the arms. Its absolute value must be at most 1e12 times `grand_mean_standard_deviation`. Defaults to 0.
   */
  "grandMean"?: number;
  /**
   * Prior standard deviation of the shared mean of the arms. Must be between 1e-12 and 1e12, and at most 1e7 times `arm_standard_deviation`. Defaults to 10000.
   */
  "grandMeanStandardDeviation"?: number;
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
    armStandardDeviation: {
      baseName: "arm_standard_deviation",
      type: "number",
      format: "double",
    },
    grandMean: {
      baseName: "grand_mean",
      type: "number",
      format: "double",
    },
    grandMeanStandardDeviation: {
      baseName: "grand_mean_standard_deviation",
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
    return ExperimentsBanditBayesianPriorInputV2.attributeTypeMap;
  }

  public constructor() {}
}
