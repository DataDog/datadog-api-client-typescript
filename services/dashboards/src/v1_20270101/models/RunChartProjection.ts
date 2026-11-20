import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RunChartProjectionDimension } from "./RunChartProjectionDimension";
import { RunChartProjectionType } from "./RunChartProjectionType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RunChartProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<RunChartProjectionDimension>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": RunChartProjectionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dimensions: {
      baseName: "dimensions",
      type: "Array<RunChartProjectionDimension>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RunChartProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RunChartProjection.attributeTypeMap;
  }

  public constructor() {}
}
