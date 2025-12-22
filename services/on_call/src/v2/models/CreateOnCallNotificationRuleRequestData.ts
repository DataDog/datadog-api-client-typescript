import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallNotificationRuleRelationships } from "./OnCallNotificationRuleRelationships";
import { OnCallNotificationRuleRequestAttributes } from "./OnCallNotificationRuleRequestAttributes";
import { OnCallNotificationRuleType } from "./OnCallNotificationRuleType";

/**
 * Data for creating an on-call notification rule
 */
export class CreateOnCallNotificationRuleRequestData {
  /**
   * Attributes for creating or modifying an on-call notification rule.
   */
  "attributes"?: OnCallNotificationRuleRequestAttributes;
  /**
   * Relationship object for creating a notification rule
   */
  "relationships"?: OnCallNotificationRuleRelationships;
  /**
   * Indicates that the resource is of type 'notification_rules'.
   */
  "type": OnCallNotificationRuleType;
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
      type: "OnCallNotificationRuleRequestAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "OnCallNotificationRuleRelationships",
    },
    type: {
      baseName: "type",
      type: "OnCallNotificationRuleType",
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
    return CreateOnCallNotificationRuleRequestData.attributeTypeMap;
  }

  public constructor() {}
}
