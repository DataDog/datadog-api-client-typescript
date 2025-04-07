import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateNotificationRuleParametersDataAttributes } from "./CreateNotificationRuleParametersDataAttributes";
import { NotificationRulesType } from "./NotificationRulesType";

/**
 * Data of the notification rule create request: the rule type, and the rule attributes. All fields are required.
 */
export class CreateNotificationRuleParametersData {
  /**
   * Attributes of the notification rule create request.
   */
  "attributes": CreateNotificationRuleParametersDataAttributes;
  /**
   * The rule type associated to notification rules.
   */
  "type": NotificationRulesType;
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
    attributes: {
      baseName: "attributes",
      type: "CreateNotificationRuleParametersDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotificationRulesType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateNotificationRuleParametersData.attributeTypeMap;
  }

  public constructor() {}
}
