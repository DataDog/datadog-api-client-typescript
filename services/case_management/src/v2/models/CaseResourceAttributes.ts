import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CasePriority } from "./CasePriority";
import { CaseStatus } from "./CaseStatus";
import { CaseType } from "./CaseType";
import { JiraIssue } from "./JiraIssue";
import { ServiceNowTicket } from "./ServiceNowTicket";

/**
 * Case attributes
 */
export class CaseResourceAttributes {
  /**
   * Timestamp of when the case was archived
   */
  "archivedAt"?: Date;
  /**
   * The definition of `CaseAttributes` object.
   */
  "attributes"?: { [key: string]: Array<string> };
  /**
   * Timestamp of when the case was closed
   */
  "closedAt"?: Date;
  /**
   * Timestamp of when the case was created
   */
  "createdAt"?: Date;
  /**
   * Description
   */
  "description"?: string;
  /**
   * Jira issue attached to case
   */
  "jiraIssue"?: JiraIssue;
  /**
   * Key
   */
  "key"?: string;
  /**
   * Timestamp of when the case was last modified
   */
  "modifiedAt"?: Date;
  /**
   * Case priority
   */
  "priority"?: CasePriority;
  /**
   * ServiceNow ticket attached to case
   */
  "serviceNowTicket"?: ServiceNowTicket;
  /**
   * Case status
   */
  "status"?: CaseStatus;
  /**
   * Title
   */
  "title"?: string;
  /**
   * Case type
   */
  "type"?: CaseType;
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
    archivedAt: {
      baseName: "archived_at",
      type: "Date",
      format: "date-time",
    },
    attributes: {
      baseName: "attributes",
      type: "{ [key: string]: Array<string>; }",
    },
    closedAt: {
      baseName: "closed_at",
      type: "Date",
      format: "date-time",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    jiraIssue: {
      baseName: "jira_issue",
      type: "JiraIssue",
    },
    key: {
      baseName: "key",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    priority: {
      baseName: "priority",
      type: "CasePriority",
    },
    serviceNowTicket: {
      baseName: "service_now_ticket",
      type: "ServiceNowTicket",
    },
    status: {
      baseName: "status",
      type: "CaseStatus",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CaseType",
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
    return CaseResourceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
