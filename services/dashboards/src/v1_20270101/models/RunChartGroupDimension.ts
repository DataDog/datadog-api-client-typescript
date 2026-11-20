import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RunChartGroupDimensionDimension } from "./RunChartGroupDimensionDimension";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RunChartGroupDimension {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimension": RunChartGroupDimensionDimension;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    dimension: {
      baseName: "dimension",
      type: "RunChartGroupDimensionDimension",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RunChartGroupDimension.attributeTypeMap;
  }

  public constructor() {}
}
