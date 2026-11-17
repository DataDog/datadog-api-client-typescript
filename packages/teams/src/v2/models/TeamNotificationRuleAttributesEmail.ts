import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

/**
 * Email notification settings for the team
 */
export class TeamNotificationRuleAttributesEmail {
  /**
   * Flag indicating email notification
   */
  "enabled"?: boolean;
  /**
   * Email address to notify. When omitted and email notifications are enabled, notifications are sent to all team members.
   */
  "recipientEmail"?: string;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    recipientEmail: {
      baseName: "recipient_email",
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
    return TeamNotificationRuleAttributesEmail.attributeTypeMap;
  }

  public constructor() {}
}
