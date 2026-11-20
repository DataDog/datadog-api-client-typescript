import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PresetPeriodTableColumnPresetType } from "./PresetPeriodTableColumnPresetType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class PresetPeriodTableColumnPreset {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": PresetPeriodTableColumnPresetType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PresetPeriodTableColumnPresetType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PresetPeriodTableColumnPreset.attributeTypeMap;
  }

  public constructor() {}
}
