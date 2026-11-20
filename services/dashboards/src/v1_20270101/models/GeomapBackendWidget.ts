import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GeomapBackendDefinition } from "./GeomapBackendDefinition";
import { WidgetLayout } from "./WidgetLayout";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendWidget {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "definition": GeomapBackendDefinition;
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
      type: "GeomapBackendDefinition",
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
    return GeomapBackendWidget.attributeTypeMap;
  }

  public constructor() {}
}
