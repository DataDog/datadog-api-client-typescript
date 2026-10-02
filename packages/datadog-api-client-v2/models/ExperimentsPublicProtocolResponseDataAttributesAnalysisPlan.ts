/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Default statistical settings supplied by the protocol.
 */
export class ExperimentsPublicProtocolResponseDataAttributesAnalysisPlan {
  /**
   * Whether to use pre-experiment data to reduce variance with CUPED.
   */
  "computeCuped"?: boolean;
  /**
   * Statistical method used to calculate confidence intervals.
   */
  "confidenceIntervalMethod"?: string;
  /**
   * Confidence level used by the statistical analysis.
   */
  "confidenceLevel"?: number;
  /**
   * Method used to adjust for testing multiple metrics.
   */
  "multipleTestingCorrectionMethod"?: string;

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
    computeCuped: {
      baseName: "compute_cuped",
      type: "boolean",
    },
    confidenceIntervalMethod: {
      baseName: "confidence_interval_method",
      type: "string",
    },
    confidenceLevel: {
      baseName: "confidence_level",
      type: "number",
      format: "double",
    },
    multipleTestingCorrectionMethod: {
      baseName: "multiple_testing_correction_method",
      type: "string",
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
    return ExperimentsPublicProtocolResponseDataAttributesAnalysisPlan.attributeTypeMap;
  }

  public constructor() {}
}
