import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReplayAnalysisIssueData } from "./ReplayAnalysisIssueData";
import { ReplayAnalysisIssueMeta } from "./ReplayAnalysisIssueMeta";

/**
 * A paginated list of RUM replay analysis issues.
 */
export class ReplayAnalysisIssuesResponse {
  /**
   * Array of RUM replay analysis issue data objects.
   */
  "data": Array<ReplayAnalysisIssueData>;
  /**
   * Metadata object for paginated issue list responses.
   */
  "meta": ReplayAnalysisIssueMeta;
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
      type: "Array<ReplayAnalysisIssueData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "ReplayAnalysisIssueMeta",
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
    return ReplayAnalysisIssuesResponse.attributeTypeMap;
  }

  public constructor() {}
}
