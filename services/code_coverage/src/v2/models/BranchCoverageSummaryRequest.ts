import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BranchCoverageSummaryRequestData } from "./BranchCoverageSummaryRequestData";

/**
 * Request object for getting code coverage summary for a branch.
 */
export class BranchCoverageSummaryRequest {
  /**
   * Data object for branch summary request.
   */
  "data": BranchCoverageSummaryRequestData;
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
      type: "BranchCoverageSummaryRequestData",
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
    return BranchCoverageSummaryRequest.attributeTypeMap;
  }

  public constructor() {}
}
