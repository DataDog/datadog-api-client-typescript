import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Slack notification settings for the team
 */
export class TeamNotificationRuleAttributesSlack {
  /**
   * Channel for Slack notification
   */
  "channel"?: string;
  /**
   * Workspace for Slack notification
   */
  "workspace"?: string;
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
    channel: {
      baseName: "channel",
      type: "string",
    },
    workspace: {
      baseName: "workspace",
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
    return TeamNotificationRuleAttributesSlack.attributeTypeMap;
  }

  public constructor() {}
}
