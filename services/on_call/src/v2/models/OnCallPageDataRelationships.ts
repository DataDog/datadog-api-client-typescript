import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageAuthorRelationship } from "./OnCallPageAuthorRelationship";
import { OnCallPageJiraIssueRelationship } from "./OnCallPageJiraIssueRelationship";
import { OnCallPageLinksRelationship } from "./OnCallPageLinksRelationship";
import { OnCallPageRespondersRelationship } from "./OnCallPageRespondersRelationship";
import { OnCallPageScheduledActionRelationship } from "./OnCallPageScheduledActionRelationship";
import { OnCallPageServiceNowIncidentRelationship } from "./OnCallPageServiceNowIncidentRelationship";
import { OnCallPageTargetRelationship } from "./OnCallPageTargetRelationship";
import { OnCallPageTeamRoutingRuleRelationship } from "./OnCallPageTeamRoutingRuleRelationship";

/**
 * The relationships of an On-Call Page.
 */
export class OnCallPageDataRelationships {
  /**
   * Reference to the entity that performed an action on the Page.
   */
  "author"?: OnCallPageAuthorRelationship;
  /**
   * Reference to the entity that performed an action on the Page.
   */
  "closedBy"?: OnCallPageAuthorRelationship;
  /**
   * The Jira issue linked to the Page.
   */
  "jiraIssue"?: OnCallPageJiraIssueRelationship;
  /**
   * Links between the Page and other Datadog resources, such as incidents. Always empty when listing Pages.
   */
  "links"?: OnCallPageLinksRelationship;
  /**
   * The users responding to the Page.
   */
  "responders"?: OnCallPageRespondersRelationship;
  /**
   * The next action scheduled on the Page, such as an escalation.
   */
  "scheduledAction"?: OnCallPageScheduledActionRelationship;
  /**
   * The ServiceNow incident linked to the Page.
   */
  "serviceNowIncident"?: OnCallPageServiceNowIncidentRelationship;
  /**
   * The team, user, or cross-organization handle that was paged.
   */
  "target"?: OnCallPageTargetRelationship;
  /**
   * The team routing rule that matched the Page.
   */
  "teamRoutingRule"?: OnCallPageTeamRoutingRuleRelationship;
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
    author: {
      baseName: "author",
      type: "OnCallPageAuthorRelationship",
    },
    closedBy: {
      baseName: "closed_by",
      type: "OnCallPageAuthorRelationship",
    },
    jiraIssue: {
      baseName: "jira_issue",
      type: "OnCallPageJiraIssueRelationship",
    },
    links: {
      baseName: "links",
      type: "OnCallPageLinksRelationship",
    },
    responders: {
      baseName: "responders",
      type: "OnCallPageRespondersRelationship",
    },
    scheduledAction: {
      baseName: "scheduled_action",
      type: "OnCallPageScheduledActionRelationship",
    },
    serviceNowIncident: {
      baseName: "service_now_incident",
      type: "OnCallPageServiceNowIncidentRelationship",
    },
    target: {
      baseName: "target",
      type: "OnCallPageTargetRelationship",
    },
    teamRoutingRule: {
      baseName: "team_routing_rule",
      type: "OnCallPageTeamRoutingRuleRelationship",
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
    return OnCallPageDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
