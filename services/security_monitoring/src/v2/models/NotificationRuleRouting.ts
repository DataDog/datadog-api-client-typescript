import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationRuleRoutingMode } from "./NotificationRuleRoutingMode";

/**
 * Routing configuration for the notification rule.
 */
export class NotificationRuleRouting {
  /**
   * The routing mode for the notification rule. `manual` sends notifications to the configured targets.
   */
  "mode": NotificationRuleRoutingMode;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    mode: {
      baseName: "mode",
      type: "NotificationRuleRoutingMode",
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
    return NotificationRuleRouting.attributeTypeMap;
  }

  public constructor() {}
}
