import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PRCoverageSummaryRequestAttributes } from "./PRCoverageSummaryRequestAttributes";
import { PRCoverageSummaryRequestType } from "./PRCoverageSummaryRequestType";

/**
 * Data object for PR summary request.
 */
export class PRCoverageSummaryRequestData {
  /**
   * Attributes for requesting code coverage summary for a pull request.
   */
  "attributes": PRCoverageSummaryRequestAttributes;
  /**
   * JSON:API type for PR coverage summary request. The value must always be `ci_app_coverage_pr_summary_request`.
   */
  "type": PRCoverageSummaryRequestType;
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
      type: "PRCoverageSummaryRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PRCoverageSummaryRequestType",
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
    return PRCoverageSummaryRequestData.attributeTypeMap;
  }

  public constructor() {}
}
