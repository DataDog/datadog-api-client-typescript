/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ComponentRecommendation } from "./ComponentRecommendation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the SPA Recommendation resource. Contains recommendations for both driver and executor components.
 */
export class RecommendationAttributes {
  /**
   * The confidence level of the recommendation, expressed as a value between 0.0 (low confidence) and 1.0 (high confidence).
   */
  "confidenceLevel"?: number;
  /**
   * Resource recommendation for a single Spark component (driver or executor). Contains estimation data used to patch Spark job specs.
   */
  "driver": ComponentRecommendation;
  /**
   * Resource recommendation for a single Spark component (driver or executor). Contains estimation data used to patch Spark job specs.
   */
  "executor": ComponentRecommendation;
  /**
   * Only returned by the v2 endpoint. The job parameters whose values the recommendation was matched on, as `parameter=value` pairs joined by `|`.
   * An empty string means the service-wide (coarse) recommendation was used.
   */
  "matchedParams"?: string;

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
    confidenceLevel: {
      baseName: "confidence_level",
      type: "number",
      format: "double",
    },
    driver: {
      baseName: "driver",
      type: "ComponentRecommendation",
      required: true,
    },
    executor: {
      baseName: "executor",
      type: "ComponentRecommendation",
      required: true,
    },
    matchedParams: {
      baseName: "matched_params",
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
    return RecommendationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
