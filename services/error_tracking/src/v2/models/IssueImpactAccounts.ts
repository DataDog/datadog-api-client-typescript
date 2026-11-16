import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueImpactAccount } from "./IssueImpactAccount";

/**
 * Accounts whose users are affected by the issue.
 */
export class IssueImpactAccounts {
  /**
   * Number of distinct accounts affected by the issue in the time window.
   */
  "distinctCount": number;
  /**
   * Up to five accounts with the most errors, most affected first.
   */
  "top": Array<IssueImpactAccount>;
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
      type: "Array<IssueImpactAccount>",
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
    return IssueImpactAccounts.attributeTypeMap;
  }

  public constructor() {}
}
