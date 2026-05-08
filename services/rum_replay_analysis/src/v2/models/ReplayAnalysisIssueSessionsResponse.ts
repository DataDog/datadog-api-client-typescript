import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReplayAnalysisIssueMeta } from "./ReplayAnalysisIssueMeta";
import { ReplayAnalysisIssueSessionData } from "./ReplayAnalysisIssueSessionData";

/**
 * A paginated list of sessions related to a RUM replay analysis issue.
 */
export class ReplayAnalysisIssueSessionsResponse {
  /**
   * Array of session data objects related to the issue.
   */
  "data": Array<ReplayAnalysisIssueSessionData>;
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
      type: "Array<ReplayAnalysisIssueSessionData>",
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
    return ReplayAnalysisIssueSessionsResponse.attributeTypeMap;
  }

  public constructor() {}
}
