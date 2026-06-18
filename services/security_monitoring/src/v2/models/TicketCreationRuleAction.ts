import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TicketCreationTarget } from "./TicketCreationTarget";

/**
 * The action to take when the ticket creation rule matches a finding.
 */
export class TicketCreationRuleAction {
  /**
   * The UUID of the default assignee for created tickets.
   */
  "assigneeId"?: string;
  /**
   * Custom fields of the Jira issue to create. For the list of available fields, see [Jira documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v2/api-group-issues/#api-rest-api-2-issue-createmeta-projectidorkey-issuetypes-issuetypeid-get).
   */
  "fields"?: any;
  /**
   * The maximum number of tickets the rule may create per day. If exceeded, one final ticket will be created, explaining the limit was hit and link back to the responsible rule.
   */
  "maxTicketsPerDay": number;
  /**
   * The UUID of the case management project.
   */
  "projectId": string;
  /**
   * The ticketing system to create tickets in.
   */
  "target": TicketCreationTarget;
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
    assigneeId: {
      baseName: "assignee_id",
      type: "string",
      format: "uuid",
    },
    fields: {
      baseName: "fields",
      type: "any",
    },
    maxTicketsPerDay: {
      baseName: "max_tickets_per_day",
      type: "number",
      required: true,
      format: "int64",
    },
    projectId: {
      baseName: "project_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    target: {
      baseName: "target",
      type: "TicketCreationTarget",
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
    return TicketCreationRuleAction.attributeTypeMap;
  }

  public constructor() {}
}
