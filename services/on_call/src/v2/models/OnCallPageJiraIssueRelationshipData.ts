import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageJiraIssueType } from "./OnCallPageJiraIssueType";

/**
 * Reference to a Jira issue.
 */
export class OnCallPageJiraIssueRelationshipData {
  /**
   * The ID of the Jira issue, in the form `<account_id>:<issue_id>`.
   */
  "id": string;
  /**
   * Jira issue resource type.
   */
  "type": OnCallPageJiraIssueType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OnCallPageJiraIssueType",
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
    return OnCallPageJiraIssueRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
