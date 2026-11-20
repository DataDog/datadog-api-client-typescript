import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetLayout } from "./WidgetLayout";
import { WildcardBackendDefinition } from "./WildcardBackendDefinition";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WildcardBackendWidget {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "definition": WildcardBackendDefinition;
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
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    definition: {
      baseName: "definition",
      type: "WildcardBackendDefinition",
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
    return WildcardBackendWidget.attributeTypeMap;
  }

  public constructor() {}
}
