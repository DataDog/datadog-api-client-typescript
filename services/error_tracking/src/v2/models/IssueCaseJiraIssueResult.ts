import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Contains the identifiers and URL for a successfully created Jira issue.
 */
export class IssueCaseJiraIssueResult {
  /**
   * Jira issue identifier.
   */
  "issueId"?: string;
  /**
   * Jira issue key.
   */
  "issueKey"?: string;
  /**
   * Jira issue URL.
   */
  "issueUrl"?: string;
  /**
   * Jira project key.
   */
  "projectKey"?: string;
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
    issueId: {
      baseName: "issue_id",
      type: "string",
    },
    issueKey: {
      baseName: "issue_key",
      type: "string",
    },
    issueUrl: {
      baseName: "issue_url",
      type: "string",
    },
    projectKey: {
      baseName: "project_key",
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
    return IssueCaseJiraIssueResult.attributeTypeMap;
  }

  public constructor() {}
}
