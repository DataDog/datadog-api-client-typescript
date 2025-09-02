import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueUserReference } from "./IssueUserReference";

/**
 * Relationship between the issue and assignee.
 */
export class IssueAssigneeRelationship {
  /**
   * The user the issue is assigned to.
   */
  "data": IssueUserReference;
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
      type: "IssueUserReference",
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
    return IssueAssigneeRelationship.attributeTypeMap;
  }

  public constructor() {}
}
