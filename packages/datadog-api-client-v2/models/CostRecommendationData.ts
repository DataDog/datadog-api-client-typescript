/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostRecommendationDataAttributes } from "./CostRecommendationDataAttributes";
import { CostRecommendationDataType } from "./CostRecommendationDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single cost recommendation entry in JSON:API form.
 */
export class CostRecommendationData {
  /**
   * Attributes describing a single cost recommendation.
   */
  "attributes"?: CostRecommendationDataAttributes;
  /**
   * Unique identifier for the recommendation.
   */
  "id"?: string;
  /**
   * Recommendation resource type.
   */
  "type": CostRecommendationDataType;

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
    attributes: {
      baseName: "attributes",
      type: "CostRecommendationDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CostRecommendationDataType",
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
    return CostRecommendationData.attributeTypeMap;
  }

  public constructor() {}
}
