import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { NoteBackendDefinition } from "./NoteBackendDefinition";
import { WidgetLayout } from "./WidgetLayout";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class NoteBackendWidget {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "definition": NoteBackendDefinition;
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
      type: "NoteBackendDefinition",
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
    return NoteBackendWidget.attributeTypeMap;
  }

  public constructor() {}
}
