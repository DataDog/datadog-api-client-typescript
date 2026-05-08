import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReplayAnalysisIssueData } from "./ReplayAnalysisIssueData";

/**
 * A single RUM replay analysis issue.
 */
export class ReplayAnalysisIssueResponse {
  /**
   * Data object representing a RUM replay analysis issue.
   */
  "data": ReplayAnalysisIssueData;
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
      type: "ReplayAnalysisIssueData",
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
    return ReplayAnalysisIssueResponse.attributeTypeMap;
  }

  public constructor() {}
}
