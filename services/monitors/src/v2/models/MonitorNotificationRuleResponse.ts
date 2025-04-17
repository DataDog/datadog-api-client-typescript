import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleData } from "./MonitorNotificationRuleData";
import { MonitorNotificationRuleResponseIncludedItem } from "./MonitorNotificationRuleResponseIncludedItem";

/**
 * A monitor notification rule.
 */
export class MonitorNotificationRuleResponse {
  /**
   * Monitor notification rule data.
   */
  "data"?: MonitorNotificationRuleData;
  /**
   * Array of objects related to the monitor notification rule that the user requested.
   */
  "included"?: Array<MonitorNotificationRuleResponseIncludedItem>;
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
      type: "MonitorNotificationRuleData",
    },
    included: {
      baseName: "included",
      type: "Array<MonitorNotificationRuleResponseIncludedItem>",
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
    return MonitorNotificationRuleResponse.attributeTypeMap;
  }

  public constructor() {}
}
