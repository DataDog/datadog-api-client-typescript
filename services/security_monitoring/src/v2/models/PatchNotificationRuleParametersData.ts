import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NotificationRulesType } from "./NotificationRulesType";
import { PatchNotificationRuleParametersDataAttributes } from "./PatchNotificationRuleParametersDataAttributes";

/**
 * Data of the notification rule patch request: the rule ID, the rule type, and the rule attributes. All fields are required.
 */
export class PatchNotificationRuleParametersData {
  /**
   * Attributes of the notification rule patch request. It is required to update the version of the rule when patching it.
   */
  "attributes": PatchNotificationRuleParametersDataAttributes;
  /**
   * The ID of a notification rule.
   */
  "id": string;
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
      type: "PatchNotificationRuleParametersDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "NotificationRulesType",
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
    return PatchNotificationRuleParametersData.attributeTypeMap;
  }

  public constructor() {}
}
