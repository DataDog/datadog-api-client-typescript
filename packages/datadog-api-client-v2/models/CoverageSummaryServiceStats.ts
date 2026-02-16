/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Coverage statistics for a specific service.
 */
export class CoverageSummaryServiceStats {
  /**
   * Number of coverage flags evaluated for the service.
   */
  "evaluatedFlagsCount"?: number;
  /**
   * Number of coverage reports evaluated for the service.
   */
  "evaluatedReportsCount"?: number;
  /**
   * Patch coverage percentage for the service.
   */
  "patchCoverage"?: number;
  /**
   * Total coverage percentage for the service.
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
    return CoverageSummaryServiceStats.attributeTypeMap;
  }

  public constructor() {}
}
