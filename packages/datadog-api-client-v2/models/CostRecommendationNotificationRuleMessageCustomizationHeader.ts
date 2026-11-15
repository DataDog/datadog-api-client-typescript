/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * What the digest header shows.
 */
export class CostRecommendationNotificationRuleMessageCustomizationHeader {
  /**
   * Text shown in the header, up to 500 characters. It can use the `{{ total_savings }}`, `{{ rec_count }}`,
   * and `{{ digest_date }}` variables.
   */
  "customText"?: string;
  /**
   * Whether the header shows the rule name.
   */
  "notificationName"?: boolean;
  /**
   * Whether the header shows the total potential savings.
   */
  "totalSavings"?: boolean;

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
    customText: {
      baseName: "custom_text",
      type: "string",
    },
    notificationName: {
      baseName: "notification_name",
      type: "boolean",
    },
    totalSavings: {
      baseName: "total_savings",
      type: "boolean",
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
    return CostRecommendationNotificationRuleMessageCustomizationHeader.attributeTypeMap;
  }

  public constructor() {}
}
