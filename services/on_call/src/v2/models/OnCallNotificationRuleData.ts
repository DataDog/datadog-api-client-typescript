import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallNotificationRuleAttributes } from "./OnCallNotificationRuleAttributes";
import { OnCallNotificationRuleRelationships } from "./OnCallNotificationRuleRelationships";
import { OnCallNotificationRuleType } from "./OnCallNotificationRuleType";

/**
 * Data for an on-call notification rule
 */
export class OnCallNotificationRuleData {
  /**
   * Attributes for an on-call notification rule.
   */
  "attributes"?: OnCallNotificationRuleAttributes;
  /**
   * Unique identifier for the rule
   */
  "id"?: string;
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
      type: "OnCallNotificationRuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return OnCallNotificationRuleData.attributeTypeMap;
  }

  public constructor() {}
}
