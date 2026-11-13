import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Coverage statistics for a specific flag.
 */
export class CoverageSummaryFlagStats {
  /**
   * Patch coverage percentage for the flag.
   */
  "patchCoverage"?: number;
  /**
   * Total coverage percentage for the flag.
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
    return CoverageSummaryFlagStats.attributeTypeMap;
  }

  public constructor() {}
}
