/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostRecommendationNotificationRuleCreateAttributes } from "./CostRecommendationNotificationRuleCreateAttributes";
import { CostRecommendationNotificationRuleType } from "./CostRecommendationNotificationRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A new recommendation notification rule.
 */
export class CostRecommendationNotificationRuleCreateData {
  /**
   * Attributes of a new recommendation notification rule. Schedule attributes depend on `frequency` and target
   * attributes depend on `destination_type`.
   */
  "attributes": CostRecommendationNotificationRuleCreateAttributes;
  /**
   * Recommendation notification rule resource type.
   */
  "type": CostRecommendationNotificationRuleType;

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
      type: "CostRecommendationNotificationRuleCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CostRecommendationNotificationRuleType",
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
    return CostRecommendationNotificationRuleCreateData.attributeTypeMap;
  }

  public constructor() {}
}
