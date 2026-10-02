import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Parameters of the prior distribution used for Bayesian analysis.
 */
export class ExperimentsAnalysisPlanV2MutationResponseDataAttributesBayesianPrior {
  /**
   * Degrees of freedom of the prior distribution.
   */
  "degreesOfFreedom"?: number;
  /**
   * Standard deviation of the prior distribution.
   */
  "standardDeviation"?: number;
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
    degreesOfFreedom: {
      baseName: "degrees_of_freedom",
      type: "number",
      format: "double",
    },
    standardDeviation: {
      baseName: "standard_deviation",
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
    return ExperimentsAnalysisPlanV2MutationResponseDataAttributesBayesianPrior.attributeTypeMap;
  }

  public constructor() {}
}
