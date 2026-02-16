import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CoverageSummaryCodeownerStats } from "./CoverageSummaryCodeownerStats";
import { CoverageSummaryServiceStats } from "./CoverageSummaryServiceStats";

/**
 * Attributes object for code coverage summary response.
 */
export class CoverageSummaryAttributes {
  /**
   * Coverage statistics broken down by code owner.
   */
  "codeowners"?: { [key: string]: CoverageSummaryCodeownerStats };
  /**
   * Total number of coverage flags evaluated.
   */
  "evaluatedFlagsCount"?: number;
  /**
   * Total number of coverage reports evaluated.
   */
  "evaluatedReportsCount"?: number;
  /**
   * Overall patch coverage percentage.
   */
  "patchCoverage"?: number;
  /**
   * Coverage statistics broken down by service.
   */
  "services"?: { [key: string]: CoverageSummaryServiceStats };
  /**
   * Overall total coverage percentage.
   */
  "totalCoverage"?: number;
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
    codeowners: {
      baseName: "codeowners",
      type: "{ [key: string]: CoverageSummaryCodeownerStats; }",
    },
    evaluatedFlagsCount: {
      baseName: "evaluated_flags_count",
      type: "number",
      format: "int64",
    },
    evaluatedReportsCount: {
      baseName: "evaluated_reports_count",
      type: "number",
      format: "int64",
    },
    patchCoverage: {
      baseName: "patch_coverage",
      type: "number",
      format: "double",
    },
    services: {
      baseName: "services",
      type: "{ [key: string]: CoverageSummaryServiceStats; }",
    },
    totalCoverage: {
      baseName: "total_coverage",
      type: "number",
      format: "double",
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
    return CoverageSummaryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
