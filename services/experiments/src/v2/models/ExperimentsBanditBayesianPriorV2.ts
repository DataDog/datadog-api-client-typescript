import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The prior the bandit's estimates start from.
 */
export class ExperimentsBanditBayesianPriorV2 {
  /**
   * Prior standard deviation of each arm's mean around the shared mean.
   */
  "armStandardDeviation": number;
  /**
   * Prior mean of the shared mean of the arms, in the metric's units.
   */
  "grandMean": number;
  /**
   * Prior standard deviation of the shared mean of the arms.
   */
  "grandMeanStandardDeviation": number;
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
      required: true,
      format: "double",
    },
    grandMean: {
      baseName: "grand_mean",
      type: "number",
      required: true,
      format: "double",
    },
    grandMeanStandardDeviation: {
      baseName: "grand_mean_standard_deviation",
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
    return ExperimentsBanditBayesianPriorV2.attributeTypeMap;
  }

  public constructor() {}
}
