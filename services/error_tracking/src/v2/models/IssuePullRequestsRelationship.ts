import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssuePullRequestReference } from "./IssuePullRequestReference";

/**
 * Relationship between the issue and its linked pull requests. Returned when `pull_requests` is included and the issue has linked pull requests.
 */
export class IssuePullRequestsRelationship {
  /**
   * Array of pull requests linked to the issue.
   */
  "data": Array<IssuePullRequestReference>;
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
      type: "Array<IssuePullRequestReference>",
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
    return IssuePullRequestsRelationship.attributeTypeMap;
  }

  public constructor() {}
}
