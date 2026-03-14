import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata for connecting a case management project to a Jira project
 */
export class IntegrationJiraMetadata {
  /**
   * The Jira account identifier
   */
  "accountId"?: string;
  /**
   * The Jira issue type identifier to use when creating issues
   */
  "issueTypeId"?: string;
  /**
   * The Jira project identifier to associate with this case project
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
    accountId: {
      baseName: "account_id",
      type: "string",
    },
    issueTypeId: {
      baseName: "issue_type_id",
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
    return IntegrationJiraMetadata.attributeTypeMap;
  }

  public constructor() {}
}
