import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssuesSearchResultIssueRelationship } from "./IssuesSearchResultIssueRelationship";

/**
 * Relationships between the search result and other resources.
 */
export class IssuesSearchResultRelationships {
  /**
   * Relationship between the search result and the corresponding issue.
   */
  "issue"?: IssuesSearchResultIssueRelationship;
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
    issue: {
      baseName: "issue",
      type: "IssuesSearchResultIssueRelationship",
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
    return IssuesSearchResultRelationships.attributeTypeMap;
  }

  public constructor() {}
}
