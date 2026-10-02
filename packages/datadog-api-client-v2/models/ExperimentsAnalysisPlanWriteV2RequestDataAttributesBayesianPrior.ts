/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Parameters of the prior distribution to use for Bayesian analysis.
 */
export class ExperimentsAnalysisPlanWriteV2RequestDataAttributesBayesianPrior {
  /**
   * Degrees of freedom of the prior distribution.
   */
  "degreesOfFreedom"?: number;
  /**
   * Standard deviation of the prior distribution.
   */
  "standardDeviation": number;

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
    return ExperimentsAnalysisPlanWriteV2RequestDataAttributesBayesianPrior.attributeTypeMap;
  }

  public constructor() {}
}
