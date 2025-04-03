import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Item in the Jira integration metadata issue array.
 */
export class JiraIntegrationMetadataIssuesItem {
  /**
   * URL of issue's Jira account.
   */
  "account": string;
  /**
   * Jira issue's issue key.
   */
  "issueKey"?: string;
  /**
   * Jira issue's issue type.
   */
  "issuetypeId"?: string;
  /**
   * Jira issue's project keys.
   */
  "projectKey": string;
  /**
   * URL redirecting to the Jira issue.
   */
  "redirectUrl"?: string;
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
    account: {
      baseName: "account",
      type: "string",
      required: true,
    },
    issueKey: {
      baseName: "issue_key",
      type: "string",
    },
    issuetypeId: {
      baseName: "issuetype_id",
      type: "string",
    },
    projectKey: {
      baseName: "project_key",
      type: "string",
      required: true,
    },
    redirectUrl: {
      baseName: "redirect_url",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JiraIntegrationMetadataIssuesItem.attributeTypeMap;
  }

  public constructor() {}
}
