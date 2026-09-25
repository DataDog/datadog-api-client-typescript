import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorAlertTriggerAttributes } from "./MonitorAlertTriggerAttributes";
import { MonitorAlertTriggerType } from "./MonitorAlertTriggerType";

/**
 * A trigger created from a monitor alert.
 */
export class MonitorAlertTrigger {
  /**
   * Attributes for a monitor alert trigger.
   */
  "monitorAlertTrigger": MonitorAlertTriggerAttributes;
  /**
   * The type of monitor alert trigger.
   */
  "type": MonitorAlertTriggerType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    monitorAlertTrigger: {
      baseName: "monitor_alert_trigger",
      type: "MonitorAlertTriggerAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "MonitorAlertTriggerType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorAlertTrigger.attributeTypeMap;
  }

  public constructor() {}
}
