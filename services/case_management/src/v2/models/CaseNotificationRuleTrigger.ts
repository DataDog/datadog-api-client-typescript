import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseNotificationRuleTriggerData } from "./CaseNotificationRuleTriggerData";

/**
 * Notification rule trigger
 */
export class CaseNotificationRuleTrigger {
  /**
   * Trigger data
   */
  "data"?: CaseNotificationRuleTriggerData;
  /**
   * Type of trigger (CASE_CREATED, STATUS_TRANSITIONED, ATTRIBUTE_VALUE_CHANGED, EVENT_CORRELATION_SIGNAL_CORRELATED)
   */
  "type"?: string;
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
      type: "CaseNotificationRuleTriggerData",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return CaseNotificationRuleTrigger.attributeTypeMap;
  }

  public constructor() {}
}
