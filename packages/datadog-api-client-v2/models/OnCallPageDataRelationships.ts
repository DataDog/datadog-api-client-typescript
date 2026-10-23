/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallPageAuthorRelationship } from "./OnCallPageAuthorRelationship";
import { OnCallPageJiraIssueRelationship } from "./OnCallPageJiraIssueRelationship";
import { OnCallPageLinksRelationship } from "./OnCallPageLinksRelationship";
import { OnCallPageRespondersRelationship } from "./OnCallPageRespondersRelationship";
import { OnCallPageScheduledActionRelationship } from "./OnCallPageScheduledActionRelationship";
import { OnCallPageServiceNowIncidentRelationship } from "./OnCallPageServiceNowIncidentRelationship";
import { OnCallPageTargetRelationship } from "./OnCallPageTargetRelationship";
import { OnCallPageTeamRoutingRuleRelationship } from "./OnCallPageTeamRoutingRuleRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The relationships of an On-Call Page.
 */
export class OnCallPageDataRelationships {
  /**
   * Reference to the entity that performed an action on the page.
   */
  "author"?: OnCallPageAuthorRelationship;
  /**
   * Reference to the entity that performed an action on the page.
   */
  "closedBy"?: OnCallPageAuthorRelationship;
  /**
   * The Jira issue linked to the page.
   */
  "jiraIssue"?: OnCallPageJiraIssueRelationship;
  /**
   * Links between the page and other Datadog resources, such as incidents. Always empty when listing pages.
   */
  "links"?: OnCallPageLinksRelationship;
  /**
   * The users responding to the page.
   */
  "responders"?: OnCallPageRespondersRelationship;
  /**
   * The next action scheduled on the page, such as an escalation.
   */
  "scheduledAction"?: OnCallPageScheduledActionRelationship;
  /**
   * The ServiceNow incident linked to the page.
   */
  "serviceNowIncident"?: OnCallPageServiceNowIncidentRelationship;
  /**
   * The team, user, or cross-organization handle that was paged.
   */
  "target"?: OnCallPageTargetRelationship;
  /**
   * The team routing rule that matched the page.
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
