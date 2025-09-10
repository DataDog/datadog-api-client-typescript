import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentNotificationRuleIncludedItems } from "./IncidentNotificationRuleIncludedItems";
import { IncidentNotificationRuleResponseData } from "./IncidentNotificationRuleResponseData";

/**
 * Response with a notification rule.
 */
export class IncidentNotificationRule {
  /**
   * Notification rule data from a response.
   */
  "data": IncidentNotificationRuleResponseData;
  /**
   * Related objects that are included in the response.
   */
  "included"?: Array<IncidentNotificationRuleIncludedItems>;
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
    data: {
      baseName: "data",
      type: "IncidentNotificationRuleResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentNotificationRuleIncludedItems>",
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
    return IncidentNotificationRule.attributeTypeMap;
  }

  public constructor() {}
}
