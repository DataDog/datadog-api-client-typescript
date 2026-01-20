import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a Jira issue template
 */
export class JiraIssueTemplateDataAttributes {
  /**
   * Custom fields for the Jira issue template
   */
  "fields": { [key: string]: any };
  /**
   * The ID of the Jira issue type
   */
  "issueTypeId": string;
  /**
   * The name of the issue template
   */
  "name": string;
  /**
   * The ID of the Jira project
   */
  "projectId": string;
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
      required: true,
    },
    issueTypeId: {
      baseName: "issue_type_id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    projectId: {
      baseName: "project_id",
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
    return JiraIssueTemplateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
