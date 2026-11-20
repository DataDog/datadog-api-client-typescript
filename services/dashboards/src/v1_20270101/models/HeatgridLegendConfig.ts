import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridLegendConfig {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "showCaption"?: boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    showCaption: {
      baseName: "show_caption",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridLegendConfig.attributeTypeMap;
  }

  public constructor() {}
}
