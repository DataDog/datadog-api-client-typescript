import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesWidgetDefinition } from "./TimeseriesWidgetDefinition";
import { WidgetLayout } from "./WidgetLayout";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesBackendWidget {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "definition": TimeseriesWidgetDefinition;
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
      type: "TimeseriesWidgetDefinition",
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
    return TimeseriesBackendWidget.attributeTypeMap;
  }

  public constructor() {}
}
