import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallNotificationRuleData } from "./OnCallNotificationRuleData";
import { OnCallNotificationRulesIncluded } from "./OnCallNotificationRulesIncluded";

/**
 * Response type for listing notification rules for a user
 */
export class ListOnCallNotificationRulesResponse {
  "data"?: Array<OnCallNotificationRuleData>;
  "included"?: Array<OnCallNotificationRulesIncluded>;
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
      type: "Array<OnCallNotificationRuleData>",
    },
    included: {
      baseName: "included",
      type: "Array<OnCallNotificationRulesIncluded>",
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
    return ListOnCallNotificationRulesResponse.attributeTypeMap;
  }

  public constructor() {}
}
