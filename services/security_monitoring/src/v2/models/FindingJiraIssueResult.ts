import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Result of the Jira issue creation.
 */
export class FindingJiraIssueResult {
  /**
   * The account ID of the Jira issue.
   */
  "accountId"?: string;
  /**
   * The unique identifier of the Jira issue.
   */
  "issueId"?: string;
  /**
   * The key of the Jira issue.
   */
  "issueKey"?: string;
  /**
   * The URL of the Jira issue.
   */
  "issueUrl"?: string;
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
    },
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FindingJiraIssueResult.attributeTypeMap;
  }

  public constructor() {}
}
