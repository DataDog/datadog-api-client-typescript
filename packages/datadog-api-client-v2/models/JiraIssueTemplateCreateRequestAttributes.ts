/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { JiraIssueTemplateCreateRequestAttributesJiraAccount } from "./JiraIssueTemplateCreateRequestAttributesJiraAccount";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a Jira issue template
 */
export class JiraIssueTemplateCreateRequestAttributes {
  /**
   * Custom fields for the Jira issue template
   */
  "fields"?: { [key: string]: any };
  /**
   * The ID of the Jira issue type
   */
  "issueTypeId"?: string;
  /**
   * Reference to the Jira account
   */
  "jiraAccount"?: JiraIssueTemplateCreateRequestAttributesJiraAccount;
  /**
   * The name of the issue template
   */
  "name"?: string;
  /**
   * The ID of the Jira project
   */
  "projectId"?: string;

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
    fields: {
      baseName: "fields",
      type: "{ [key: string]: any; }",
    },
    issueTypeId: {
      baseName: "issue_type_id",
      type: "string",
    },
    jiraAccount: {
      baseName: "jira-account",
      type: "JiraIssueTemplateCreateRequestAttributesJiraAccount",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    projectId: {
      baseName: "project_id",
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
    return JiraIssueTemplateCreateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
