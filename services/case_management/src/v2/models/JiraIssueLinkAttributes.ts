import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Jira issue link attributes
 */
export class JiraIssueLinkAttributes {
  /**
   * URL of the Jira issue
   */
  "jiraIssueUrl": string;
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
    jiraIssueUrl: {
      baseName: "jira_issue_url",
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
    return JiraIssueLinkAttributes.attributeTypeMap;
  }

  public constructor() {}
}
