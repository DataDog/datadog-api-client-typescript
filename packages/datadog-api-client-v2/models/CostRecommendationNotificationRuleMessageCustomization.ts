/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostRecommendationNotificationRuleMessageActions } from "./CostRecommendationNotificationRuleMessageActions";
import { CostRecommendationNotificationRuleMessageCustomizationHeader } from "./CostRecommendationNotificationRuleMessageCustomizationHeader";
import { CostRecommendationNotificationRuleMessageCustomizationMode } from "./CostRecommendationNotificationRuleMessageCustomizationMode";
import { CostRecommendationNotificationRuleMessageCustomizationPerRec } from "./CostRecommendationNotificationRuleMessageCustomizationPerRec";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Which sections the digest shows. Sent as a whole: sections left out of a request use their defaults, which
 * show everything.
 */
export class CostRecommendationNotificationRuleMessageCustomization {
  /**
   * Links the digest shows. `view_in_ccm` is the link to review the recommendations in Cloud Cost Management.
   */
  "actions"?: CostRecommendationNotificationRuleMessageActions;
  /**
   * What the digest header shows.
   */
  "header"?: CostRecommendationNotificationRuleMessageCustomizationHeader;
  /**
   * Tag keys whose values are shown on each recommendation in the digest.
   */
  "includeTags"?: Array<string>;
  /**
   * How the message is customized.
   */
  "mode"?: CostRecommendationNotificationRuleMessageCustomizationMode;
  /**
   * What each recommendation in the digest shows.
   */
  "perRec"?: CostRecommendationNotificationRuleMessageCustomizationPerRec;

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
    actions: {
      baseName: "actions",
      type: "CostRecommendationNotificationRuleMessageActions",
    },
    header: {
      baseName: "header",
      type: "CostRecommendationNotificationRuleMessageCustomizationHeader",
    },
    includeTags: {
      baseName: "include_tags",
      type: "Array<string>",
    },
    mode: {
      baseName: "mode",
      type: "CostRecommendationNotificationRuleMessageCustomizationMode",
    },
    perRec: {
      baseName: "per_rec",
      type: "CostRecommendationNotificationRuleMessageCustomizationPerRec",
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
    return CostRecommendationNotificationRuleMessageCustomization.attributeTypeMap;
  }

  public constructor() {}
}
