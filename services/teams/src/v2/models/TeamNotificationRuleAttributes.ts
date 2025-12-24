import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamNotificationRuleAttributesEmail } from "./TeamNotificationRuleAttributesEmail";
import { TeamNotificationRuleAttributesMsTeams } from "./TeamNotificationRuleAttributesMsTeams";
import { TeamNotificationRuleAttributesPagerduty } from "./TeamNotificationRuleAttributesPagerduty";
import { TeamNotificationRuleAttributesSlack } from "./TeamNotificationRuleAttributesSlack";

/**
 * Team notification rule attributes
 */
export class TeamNotificationRuleAttributes {
  /**
   * Email notification settings for the team
   */
  "email"?: TeamNotificationRuleAttributesEmail;
  /**
   * MS Teams notification settings for the team
   */
  "msTeams"?: TeamNotificationRuleAttributesMsTeams;
  /**
   * PagerDuty notification settings for the team
   */
  "pagerduty"?: TeamNotificationRuleAttributesPagerduty;
  /**
   * Slack notification settings for the team
   */
  "slack"?: TeamNotificationRuleAttributesSlack;
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
    email: {
      baseName: "email",
      type: "TeamNotificationRuleAttributesEmail",
    },
    msTeams: {
      baseName: "ms_teams",
      type: "TeamNotificationRuleAttributesMsTeams",
    },
    pagerduty: {
      baseName: "pagerduty",
      type: "TeamNotificationRuleAttributesPagerduty",
    },
    slack: {
      baseName: "slack",
      type: "TeamNotificationRuleAttributesSlack",
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
    return TeamNotificationRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
