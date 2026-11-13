import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueImpactErrorCounts } from "./IssueImpactErrorCounts";
import { IssueImpactViewCounts } from "./IssueImpactViewCounts";

/**
 * A RUM view where the issue occurred.
 */
export class IssueImpactView {
  /**
   * Distinct users, accounts, sessions, and view instances on a view. `affected` counts only those with the issue's
   * errors. `baseline` counts all users, accounts, sessions, and view instances on the view in the time window. It
   * is absent when RUM has no data for the view.
   */
  "affected": IssueImpactViewCounts;
  /**
   * Distinct users, accounts, sessions, and view instances on a view. `affected` counts only those with the issue's
   * errors. `baseline` counts all users, accounts, sessions, and view instances on the view in the time window. It
   * is absent when RUM has no data for the view.
   */
  "baseline"?: IssueImpactViewCounts;
  /**
   * Number of errors reported by each source. Several sources can report the same error, such as an APM span and
   * a log, so the counts overlap: don't add them together.
   */
  "errorCounts": IssueImpactErrorCounts;
  /**
   * View name.
   */
  "name": string;
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
    affected: {
      baseName: "affected",
      type: "IssueImpactViewCounts",
      required: true,
    },
    baseline: {
      baseName: "baseline",
      type: "IssueImpactViewCounts",
    },
    errorCounts: {
      baseName: "error_counts",
      type: "IssueImpactErrorCounts",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
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
    return IssueImpactView.attributeTypeMap;
  }

  public constructor() {}
}
