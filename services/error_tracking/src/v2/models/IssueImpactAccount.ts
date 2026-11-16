import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueImpactErrorCounts } from "./IssueImpactErrorCounts";

/**
 * An account whose users are affected by the issue.
 */
export class IssueImpactAccount {
  /**
   * Number of errors reported by each source. Several sources can report the same error, such as an APM span and
   * a log, so the counts overlap: don't add them together.
   */
  "errorCounts": IssueImpactErrorCounts;
  /**
   * Account ID, from the `account.id` attribute.
   */
  "id": string;
  /**
   * Account name, if available.
   */
  "name"?: string;
  /**
   * Whether the entry stands out as a likely driver of the issue, because it accounts for most of the issue's
   * errors or for far more errors than the other listed entries.
   */
  "significant": boolean;
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
    errorCounts: {
      baseName: "error_counts",
      type: "IssueImpactErrorCounts",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    significant: {
      baseName: "significant",
      type: "boolean",
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
    return IssueImpactAccount.attributeTypeMap;
  }

  public constructor() {}
}
