import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Result of the Linear issue creation.
 */
export class FindingLinearIssueResult {
  /**
   * Account ID of the Linear workspace.
   */
  "accountId"?: string;
  /**
   * Unique identifier of the Linear issue.
   */
  "issueId"?: string;
  /**
   * Key of the Linear issue.
   */
  "issueKey"?: string;
  /**
   * Team ID of the Linear issue.
   */
  "teamId"?: string;
  /**
   * URL of the Linear issue.
   */
  "url"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
    teamId: {
      baseName: "team_id",
      type: "string",
    },
    url: {
      baseName: "url",
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
    return FindingLinearIssueResult.attributeTypeMap;
  }

  public constructor() {}
}
