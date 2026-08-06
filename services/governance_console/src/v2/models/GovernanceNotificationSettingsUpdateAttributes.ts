import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of the governance notification settings that can be updated. Only the attributes present in the request are modified.
 */
export class GovernanceNotificationSettingsUpdateAttributes {
  /**
   * Whether notifications are sent to users when detections are assigned to them.
   */
  "assignmentNotificationsEnabled"?: boolean;
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
    assignmentNotificationsEnabled: {
      baseName: "assignment_notifications_enabled",
      type: "boolean",
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
    return GovernanceNotificationSettingsUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
