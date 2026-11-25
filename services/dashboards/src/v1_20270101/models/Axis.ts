import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AxisBound } from "./AxisBound";
import { ScaleType } from "./ScaleType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class Axis {
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
  "max"?: AxisBound;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "min"?: AxisBound;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scale"?: ScaleType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "units"?: boolean;
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
      type: "AxisBound",
    },
    min: {
      baseName: "min",
      type: "AxisBound",
    },
    scale: {
      baseName: "scale",
      type: "ScaleType",
    },
    units: {
      baseName: "units",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Axis.attributeTypeMap;
  }

  public constructor() {}
}
