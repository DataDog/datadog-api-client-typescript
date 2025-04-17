import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleData } from "./MonitorNotificationRuleData";
import { MonitorNotificationRuleResponseIncludedItem } from "./MonitorNotificationRuleResponseIncludedItem";

/**
 * Response for retrieving all monitor notification rules.
 */
export class MonitorNotificationRuleListResponse {
  /**
   * A list of monitor notification rules.
   */
  "data"?: Array<MonitorNotificationRuleData>;
  /**
   * Array of objects related to the monitor notification rules.
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
      type: "Array<MonitorNotificationRuleData>",
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
    return MonitorNotificationRuleListResponse.attributeTypeMap;
  }

  public constructor() {}
}
