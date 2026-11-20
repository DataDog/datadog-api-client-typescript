import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WidgetMarker {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "displayType"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "label"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "onRightYaxis"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "time"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    displayType: {
      baseName: "display_type",
      type: "string",
    },
    label: {
      baseName: "label",
      type: "string",
    },
    onRightYaxis: {
      baseName: "on_right_yaxis",
      type: "boolean",
    },
    time: {
      baseName: "time",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetMarker.attributeTypeMap;
  }

  public constructor() {}
}
