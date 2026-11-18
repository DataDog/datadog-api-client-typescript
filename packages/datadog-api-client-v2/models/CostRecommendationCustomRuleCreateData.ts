/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostRecommendationCustomRuleCreateAttributes } from "./CostRecommendationCustomRuleCreateAttributes";
import { CostRecommendationCustomRuleType } from "./CostRecommendationCustomRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A new custom recommendation rule.
 */
export class CostRecommendationCustomRuleCreateData {
  /**
   * Attributes of a new custom recommendation rule.
   */
  "attributes": CostRecommendationCustomRuleCreateAttributes;
  /**
   * Custom recommendation rule resource type.
   */
  "type": CostRecommendationCustomRuleType;

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
      type: "CostRecommendationCustomRuleCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostRecommendationCustomRuleType",
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
    return CostRecommendationCustomRuleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
