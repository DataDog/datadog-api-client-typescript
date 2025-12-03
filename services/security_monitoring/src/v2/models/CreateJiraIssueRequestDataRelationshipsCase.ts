import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateJiraIssueRequestDataRelationshipsCaseData } from "./CreateJiraIssueRequestDataRelationshipsCaseData";

/**
 * Case linked to the Jira issue.
 */
export class CreateJiraIssueRequestDataRelationshipsCase {
  /**
   * Case linked to the Jira issue.
   */
  "data": CreateJiraIssueRequestDataRelationshipsCaseData;
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
    data: {
      baseName: "data",
      type: "CreateJiraIssueRequestDataRelationshipsCaseData",
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
    return CreateJiraIssueRequestDataRelationshipsCase.attributeTypeMap;
  }

  public constructor() {}
}
