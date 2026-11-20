import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaleType } from "./ScaleType";
import { TimeseriesStackMode } from "./TimeseriesStackMode";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class BackendTimeseriesAxisDefinition {
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
  "max"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "min"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scale"?: ScaleType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showUnit"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "stack"?: TimeseriesStackMode;
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
      type: "string",
    },
    min: {
      baseName: "min",
      type: "string",
    },
    scale: {
      baseName: "scale",
      type: "ScaleType",
    },
    showUnit: {
      baseName: "show_unit",
      type: "boolean",
    },
    stack: {
      baseName: "stack",
      type: "TimeseriesStackMode",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BackendTimeseriesAxisDefinition.attributeTypeMap;
  }

  public constructor() {}
}
