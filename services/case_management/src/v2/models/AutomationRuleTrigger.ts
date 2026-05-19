import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AutomationRuleTriggerData } from "./AutomationRuleTriggerData";
import { AutomationRuleTriggerType } from "./AutomationRuleTriggerType";

/**
 * Defines when the rule activates. Combines a trigger type (the case event to listen for) with optional trigger data (conditions that narrow when the trigger fires).
 */
export class AutomationRuleTrigger {
  /**
   * Additional configuration for the trigger, dependent on the trigger type. For `status_transitioned` triggers, specify `from_status_name` and `to_status_name`. For `attribute_value_changed` triggers, specify `field` and `change_type`.
   */
  "data"?: AutomationRuleTriggerData;
  /**
   * The case event that activates the automation rule.
   */
  "type": AutomationRuleTriggerType;
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
      type: "AutomationRuleTriggerData",
    },
    type: {
      baseName: "type",
      type: "AutomationRuleTriggerType",
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
    return AutomationRuleTrigger.attributeTypeMap;
  }

  public constructor() {}
}
