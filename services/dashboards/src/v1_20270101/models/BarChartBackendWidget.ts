import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BarChartBackendDefinition } from "./BarChartBackendDefinition";
import { WidgetLayout } from "./WidgetLayout";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class BarChartBackendWidget {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "definition": BarChartBackendDefinition;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "id"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "layout"?: WidgetLayout;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    definition: {
      baseName: "definition",
      type: "BarChartBackendDefinition",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",
      format: "double",
    },
    layout: {
      baseName: "layout",
      type: "WidgetLayout",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BarChartBackendWidget.attributeTypeMap;
  }

  public constructor() {}
}
