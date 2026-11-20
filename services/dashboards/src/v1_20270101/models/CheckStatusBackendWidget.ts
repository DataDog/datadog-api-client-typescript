import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CheckStatusBackendDefinition } from "./CheckStatusBackendDefinition";
import { WidgetLayout } from "./WidgetLayout";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CheckStatusBackendWidget {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "definition": CheckStatusBackendDefinition;
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
      type: "CheckStatusBackendDefinition",
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
    return CheckStatusBackendWidget.attributeTypeMap;
  }

  public constructor() {}
}
