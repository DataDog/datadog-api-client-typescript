import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BranchCoverageSummaryRequestAttributes } from "./BranchCoverageSummaryRequestAttributes";
import { BranchCoverageSummaryRequestType } from "./BranchCoverageSummaryRequestType";

/**
 * Data object for branch summary request.
 */
export class BranchCoverageSummaryRequestData {
  /**
   * Attributes for requesting code coverage summary for a branch.
   */
  "attributes": BranchCoverageSummaryRequestAttributes;
  /**
   * JSON:API type for branch coverage summary request. The value must always be `ci_app_coverage_branch_summary_request`.
   */
  "type": BranchCoverageSummaryRequestType;
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
    attributes: {
      baseName: "attributes",
      type: "BranchCoverageSummaryRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "BranchCoverageSummaryRequestType",
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
    return BranchCoverageSummaryRequestData.attributeTypeMap;
  }

  public constructor() {}
}
