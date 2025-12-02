/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseInsightsItems } from "./CaseInsightsItems";
import { FindingJiraIssue } from "./FindingJiraIssue";
import { RelationshipToUser } from "./RelationshipToUser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the case.
 */
export class FindingCaseResponseDataAttributes {
  /**
   * Timestamp of when the case was archived.
   */
  "archivedAt"?: Date;
  /**
   * Relationship to user.
   */
  "assignedTo"?: RelationshipToUser;
  "attributes"?: { [key: string]: Array<string> };
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
  "insights"?: Array<CaseInsightsItems>;
  /**
   * Jira issue associated with the case.
   */
  "jiraIssue"?: FindingJiraIssue;
  /**
   * Key of the case.
   */
  "key"?: string;
  /**
   * Timestamp of when the case was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * Priority of the case.
   */
  "priority"?: string;
  /**
   * Status of the case.
   */
  "status"?: string;
  /**
   * Status group of the case.
   */
  "statusGroup"?: string;
  /**
   * Status name of the case.
   */
  "statusName"?: string;
  /**
   * Title of the case.
   */
  "title"?: string;
  /**
   * Type of the case. For security cases, this is always "SECURITY".
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
    assignedTo: {
      baseName: "assigned_to",
      type: "RelationshipToUser",
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
      type: "Array<CaseInsightsItems>",
    },
    jiraIssue: {
      baseName: "jira_issue",
      type: "FindingJiraIssue",
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
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    statusGroup: {
      baseName: "status_group",
      type: "string",
    },
    statusName: {
      baseName: "status_name",
      type: "string",
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
    return FindingCaseResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
