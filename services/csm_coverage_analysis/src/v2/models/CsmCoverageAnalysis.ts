import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * CSM Coverage Analysis.
 */
export class CsmCoverageAnalysis {
  /**
   * The number of fully configured resources.
   */
  "configuredResourcesCount"?: number;
  /**
   * The coverage percentage.
   */
  "coverage"?: number;
  /**
   * The number of partially configured resources.
   */
  "partiallyConfiguredResourcesCount"?: number;
  /**
   * The total number of resources.
   */
  "totalResourcesCount"?: number;
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
    configuredResourcesCount: {
      baseName: "configured_resources_count",
      type: "number",
      format: "int64",
    },
    coverage: {
      baseName: "coverage",
      type: "number",
      format: "double",
    },
    partiallyConfiguredResourcesCount: {
      baseName: "partially_configured_resources_count",
      type: "number",
      format: "int64",
    },
    totalResourcesCount: {
      baseName: "total_resources_count",
      type: "number",
      format: "int64",
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
    return CsmCoverageAnalysis.attributeTypeMap;
  }

  public constructor() {}
}
