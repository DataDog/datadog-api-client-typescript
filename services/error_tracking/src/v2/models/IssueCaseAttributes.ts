import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CasePriority } from "./CasePriority";
import { CaseStatus } from "./CaseStatus";
import { IssueCaseInsight } from "./IssueCaseInsight";
import { IssueCaseJiraIssue } from "./IssueCaseJiraIssue";

/**
 * Object containing the information of a case.
 */
export class IssueCaseAttributes {
  /**
   * Timestamp of when the case was archived.
   */
  "archivedAt"?: Date;
  /**
   * Timestamp of when the case was closed.
   */
  "closedAt"?: Date;
  /**
   * Timestamp of when the case was created.
   */
  "createdAt"?: Date;
  /**
   * Source of the case creation.
   */
  "creationSource"?: string;
  /**
   * Description of the case.
   */
  "description"?: string;
  /**
   * Due date of the case.
   */
  "dueDate"?: string;
  /**
   * Insights of the case.
   */
  "insights"?: Array<IssueCaseInsight>;
  /**
   * Jira issue of the case.
   */
  "jiraIssue"?: IssueCaseJiraIssue;
  /**
   * Key of the case.
   */
  "key"?: string;
  /**
   * Timestamp of when the case was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * Case priority
   */
  "priority"?: CasePriority;
  /**
   * Case status
   */
  "status"?: CaseStatus;
  /**
   * Title of the case.
   */
  "title"?: string;
  /**
   * Type of the case.
   */
  "type"?: string;
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
    creationSource: {
      baseName: "creation_source",
      type: "string",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    dueDate: {
      baseName: "due_date",
      type: "string",
    },
    insights: {
      baseName: "insights",
      type: "Array<IssueCaseInsight>",
    },
    jiraIssue: {
      baseName: "jira_issue",
      type: "IssueCaseJiraIssue",
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
    return IssueCaseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
