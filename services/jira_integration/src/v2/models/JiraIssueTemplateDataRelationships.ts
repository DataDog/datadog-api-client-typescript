import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JiraAccountRelationship } from "./JiraAccountRelationship";

/**
 * Relationships of a Jira issue template
 */
export class JiraIssueTemplateDataRelationships {
  /**
   * Relationship to a Jira account
   */
  "jiraAccount": JiraAccountRelationship;
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
    jiraAccount: {
      baseName: "jira-account",
      type: "JiraAccountRelationship",
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
    return JiraIssueTemplateDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
