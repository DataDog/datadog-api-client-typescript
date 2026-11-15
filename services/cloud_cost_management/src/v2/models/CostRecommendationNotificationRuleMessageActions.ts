import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationNotificationRuleMessageAction } from "./CostRecommendationNotificationRuleMessageAction";

/**
 * Links the digest shows. `view_in_ccm` is the link to review the recommendations in Cloud Cost Management.
 */
export class CostRecommendationNotificationRuleMessageActions {
  /**
   * Where a message action appears.
   */
  "viewInCcm"?: CostRecommendationNotificationRuleMessageAction;
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
    viewInCcm: {
      baseName: "view_in_ccm",
      type: "CostRecommendationNotificationRuleMessageAction",
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
    return CostRecommendationNotificationRuleMessageActions.attributeTypeMap;
  }

  public constructor() {}
}
