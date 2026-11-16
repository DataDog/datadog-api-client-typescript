import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueImpactUser } from "./IssueImpactUser";

/**
 * Users affected by the issue.
 */
export class IssueImpactUsers {
  /**
   * Number of distinct users affected by the issue in the time window.
   */
  "distinctCount": number;
  /**
   * Up to five users with the most errors, most affected first.
   */
  "top": Array<IssueImpactUser>;
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
    distinctCount: {
      baseName: "distinct_count",
      type: "number",
      required: true,
      format: "int64",
    },
    top: {
      baseName: "top",
      type: "Array<IssueImpactUser>",
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
    return IssueImpactUsers.attributeTypeMap;
  }

  public constructor() {}
}
