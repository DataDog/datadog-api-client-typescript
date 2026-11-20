import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BackendDistributionYAxis20270101Max } from "../../v1/models/BackendDistributionYAxis20270101Max";
import { BackendDistributionYAxis20270101Min } from "../../v1/models/BackendDistributionYAxis20270101Min";
import { BackendDistributionYAxisScale } from "./BackendDistributionYAxisScale";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class BackendDistributionYAxis {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "includeZero"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "label"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "max"?: BackendDistributionYAxis20270101Max;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "min"?: BackendDistributionYAxis20270101Min;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scale"?: BackendDistributionYAxisScale;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showUnit"?: boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    includeZero: {
      baseName: "include_zero",
      type: "boolean",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    max: {
      baseName: "max",
      type: "BackendDistributionYAxis20270101Max",
    },
    min: {
      baseName: "min",
      type: "BackendDistributionYAxis20270101Min",
    },
    scale: {
      baseName: "scale",
      type: "BackendDistributionYAxisScale",
    },
    showUnit: {
      baseName: "show_unit",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BackendDistributionYAxis.attributeTypeMap;
  }

  public constructor() {}
}
