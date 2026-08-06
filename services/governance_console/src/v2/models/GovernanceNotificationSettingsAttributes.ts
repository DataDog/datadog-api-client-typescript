import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The attributes of the organization-wide governance notification settings.
 */
export class GovernanceNotificationSettingsAttributes {
  /**
   * Whether notifications are sent to users when detections are assigned to them.
   */
  "assignmentNotificationsEnabled": boolean;
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
    return GovernanceNotificationSettingsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
