import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OnCallPageJiraIssueRelationshipData } from "./OnCallPageJiraIssueRelationshipData";

/**
 * The Jira issue linked to the Page.
 */
export class OnCallPageJiraIssueRelationship {
  /**
   * Reference to a Jira issue.
   */
  "data"?: OnCallPageJiraIssueRelationshipData;
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
      type: "OnCallPageJiraIssueRelationshipData",
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
    return OnCallPageJiraIssueRelationship.attributeTypeMap;
  }

  public constructor() {}
}
