import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitCoverageSummaryRequestData } from "./CommitCoverageSummaryRequestData";

/**
 * Request object for getting code coverage summary for a commit.
 */
export class CommitCoverageSummaryRequest {
  /**
   * Data object for commit summary request.
   */
  "data": CommitCoverageSummaryRequestData;
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
      type: "CommitCoverageSummaryRequestData",
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
    return CommitCoverageSummaryRequest.attributeTypeMap;
  }

  public constructor() {}
}
