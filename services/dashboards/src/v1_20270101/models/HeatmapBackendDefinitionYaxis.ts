import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScaleType } from "./ScaleType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatmapBackendDefinitionYaxis {
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
  "numBuckets"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scale"?: ScaleType;
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
      type: "string",
    },
    min: {
      baseName: "min",
      type: "string",
    },
    numBuckets: {
      baseName: "num_buckets",
      type: "number",
      format: "double",
    },
    scale: {
      baseName: "scale",
      type: "ScaleType",
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
    return HeatmapBackendDefinitionYaxis.attributeTypeMap;
  }

  public constructor() {}
}
