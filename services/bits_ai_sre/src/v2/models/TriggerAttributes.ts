import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorAlertTriggerAttributes } from "./MonitorAlertTriggerAttributes";
import { TriggerType } from "./TriggerType";

/**
 * The trigger definition for starting an investigation.
 */
export class TriggerAttributes {
  /**
   * Attributes for a monitor alert trigger.
   */
  "monitorAlertTrigger": MonitorAlertTriggerAttributes;
  /**
   * The type of trigger for the investigation.
   */
  "type": TriggerType;
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
    monitorAlertTrigger: {
      baseName: "monitor_alert_trigger",
      type: "MonitorAlertTriggerAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TriggerType",
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
    return TriggerAttributes.attributeTypeMap;
  }

  public constructor() {}
}
