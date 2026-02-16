import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraIssueDataAttributesRequestMode } from "./JiraIssueDataAttributesRequestMode";

export class JiraIssueDataAttributesRequest {
  /**
   * Jira account identifier.
   */
  "accountId": string;
  /**
   * Custom fields for the Jira issue.
   */
  "fields"?: { [key: string]: any };
  /**
   * Jira issue type name.
   */
  "issueType": string;
  /**
   * Jira issue type identifier.
   */
  "issuetypeId": string;
  /**
   * Mode for creating the Jira issue. Can be "single" or "multiple".
   */
  "mode"?: JiraIssueDataAttributesRequestMode;
  /**
   * Jira project identifier.
   */
  "projectId": string;
  /**
   * Jira project key.
   */
  "projectKey": string;
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
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    fields: {
      baseName: "fields",
      type: "{ [key: string]: any; }",
    },
    issueType: {
      baseName: "issue_type",
      type: "string",
      required: true,
    },
    issuetypeId: {
      baseName: "issuetype_id",
      type: "string",
      required: true,
    },
    mode: {
      baseName: "mode",
      type: "JiraIssueDataAttributesRequestMode",
    },
    projectId: {
      baseName: "project_id",
      type: "string",
      required: true,
    },
    projectKey: {
      baseName: "project_key",
      type: "string",
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
    return JiraIssueDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
