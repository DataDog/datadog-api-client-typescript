import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentNotificationRuleAttributesVisibility } from "./IncidentNotificationRuleAttributesVisibility";
import { IncidentNotificationRuleConditionsItems } from "./IncidentNotificationRuleConditionsItems";

/**
 * The notification rule's attributes.
 */
export class IncidentNotificationRuleAttributes {
  /**
   * The conditions that trigger this notification rule.
   */
  "conditions": Array<IncidentNotificationRuleConditionsItems>;
  /**
   * Timestamp when the notification rule was created.
   */
  "created": Date;
  /**
   * Whether the notification rule is enabled.
   */
  "enabled": boolean;
  /**
   * The notification handles (targets) for this rule.
   */
  "handles": Array<string>;
  /**
   * Timestamp when the notification rule was last modified.
   */
  "modified": Date;
  /**
   * List of incident fields that trigger re-notification when changed.
   */
  "renotifyOn"?: Array<string>;
  /**
   * The trigger event for this notification rule.
   */
  "trigger": string;
  /**
   * The visibility of the notification rule.
   */
  "visibility": IncidentNotificationRuleAttributesVisibility;
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
    conditions: {
      baseName: "conditions",
      type: "Array<IncidentNotificationRuleConditionsItems>",
      required: true,
    },
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    handles: {
      baseName: "handles",
      type: "Array<string>",
      required: true,
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    renotifyOn: {
      baseName: "renotify_on",
      type: "Array<string>",
    },
    trigger: {
      baseName: "trigger",
      type: "string",
      required: true,
    },
    visibility: {
      baseName: "visibility",
      type: "IncidentNotificationRuleAttributesVisibility",
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
    return IncidentNotificationRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
