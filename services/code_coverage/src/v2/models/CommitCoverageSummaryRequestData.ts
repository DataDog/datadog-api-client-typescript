import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitCoverageSummaryRequestAttributes } from "./CommitCoverageSummaryRequestAttributes";
import { CommitCoverageSummaryRequestType } from "./CommitCoverageSummaryRequestType";

/**
 * Data object for commit summary request.
 */
export class CommitCoverageSummaryRequestData {
  /**
   * Attributes for requesting code coverage summary for a commit.
   */
  "attributes": CommitCoverageSummaryRequestAttributes;
  /**
   * JSON:API type for commit coverage summary request. The value must always be `ci_app_coverage_commit_summary_request`.
   */
  "type": CommitCoverageSummaryRequestType;
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
      type: "CommitCoverageSummaryRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CommitCoverageSummaryRequestType",
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
    return CommitCoverageSummaryRequestData.attributeTypeMap;
  }

  public constructor() {}
}
