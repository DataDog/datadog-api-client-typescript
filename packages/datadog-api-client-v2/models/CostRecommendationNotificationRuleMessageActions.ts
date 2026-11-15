/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostRecommendationNotificationRuleMessageAction } from "./CostRecommendationNotificationRuleMessageAction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
