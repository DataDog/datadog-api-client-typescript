import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FORMSIZES } from "./FORMSIZES";
import { SplitConfig } from "./SplitConfig";
import { SplitGroupBackendDefinition20270101SourceWidgetDefinition } from "./SplitGroupBackendDefinition20270101SourceWidgetDefinition";
import { SplitGroupBackendDefinitionType } from "./SplitGroupBackendDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SplitGroupBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "description"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hasUniformYAxes"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "notes"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "size": FORMSIZES;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sourceWidgetDefinition": SplitGroupBackendDefinition20270101SourceWidgetDefinition;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "splitConfig": SplitConfig;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "time"?: WidgetTime;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "title"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "titleSize"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": SplitGroupBackendDefinitionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    hasUniformYAxes: {
      baseName: "has_uniform_y_axes",
      type: "boolean",
    },
    notes: {
      baseName: "notes",
      type: "string",
    },
    size: {
      baseName: "size",
      type: "FORMSIZES",
      required: true,
    },
    sourceWidgetDefinition: {
      baseName: "source_widget_definition",
      type: "SplitGroupBackendDefinition20270101SourceWidgetDefinition",
      required: true,
    },
    splitConfig: {
      baseName: "split_config",
      type: "SplitConfig",
      required: true,
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SplitGroupBackendDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SplitGroupBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
