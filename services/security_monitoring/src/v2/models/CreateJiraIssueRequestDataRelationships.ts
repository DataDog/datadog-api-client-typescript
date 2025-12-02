import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateJiraIssueRequestDataRelationshipsCase } from "./CreateJiraIssueRequestDataRelationshipsCase";

/**
 * Relationships of the Jira issue to create.
 */
export class CreateJiraIssueRequestDataRelationships {
  /**
   * Case linked to the Jira issue.
   */
  "_case": CreateJiraIssueRequestDataRelationshipsCase;
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
    _case: {
      baseName: "case",
      type: "CreateJiraIssueRequestDataRelationshipsCase",
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
    return CreateJiraIssueRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
