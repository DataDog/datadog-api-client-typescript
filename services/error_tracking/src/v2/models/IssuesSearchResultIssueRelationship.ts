import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueReference } from "./IssueReference";

/**
 * Relationship between the search result and the corresponding issue.
 */
export class IssuesSearchResultIssueRelationship {
  /**
   * The issue the search result corresponds to.
   */
  "data": IssueReference;
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
      type: "IssueReference",
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
    return IssuesSearchResultIssueRelationship.attributeTypeMap;
  }

  public constructor() {}
}
