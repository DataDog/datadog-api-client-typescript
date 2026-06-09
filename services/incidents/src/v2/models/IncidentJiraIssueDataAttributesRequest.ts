import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a Jira issue from an incident.
 */
export class IncidentJiraIssueDataAttributesRequest {
  /**
   * The Jira account identifier.
   */
  "accountId": string;
  /**
   * The Jira issue type identifier.
   */
  "issueTypeId": string;
  /**
   * The Jira project identifier.
   */
  "projectId": string;
  /**
   * The identifier of the Jira template to use.
   */
  "templateId"?: string;
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
    issueTypeId: {
      baseName: "issue_type_id",
      type: "string",
      required: true,
    },
    projectId: {
      baseName: "project_id",
      type: "string",
      required: true,
    },
    templateId: {
      baseName: "template_id",
      type: "string",
      format: "uuid",
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
    return IncidentJiraIssueDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
