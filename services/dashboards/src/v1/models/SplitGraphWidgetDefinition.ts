import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SplitConfig } from "./SplitConfig";
import { SplitGraphSourceWidgetDefinition } from "./SplitGraphSourceWidgetDefinition";
import { SplitGraphVizSize } from "./SplitGraphVizSize";
import { SplitGraphWidgetDefinitionType } from "./SplitGraphWidgetDefinitionType";
import { WidgetTime } from "./WidgetTime";

/**
 * The split graph widget allows you to create repeating units of a graph - one for each value in a group (for example: one per service)
 */
export class SplitGraphWidgetDefinition {
  /**
   * Normalize y axes across graphs
   */
  "hasUniformYAxes"?: boolean;
  /**
   * Size of the individual graphs in the split.
   */
  "size": SplitGraphVizSize;
  /**
   * The original widget we are splitting on.
   */
  "sourceWidgetDefinition": SplitGraphSourceWidgetDefinition;
  /**
   * Encapsulates all user choices about how to split a graph.
   */
  "splitConfig": SplitConfig;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  /**
   * Type of the split graph widget
   */
  "type": SplitGraphWidgetDefinitionType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    hasUniformYAxes: {
      baseName: "has_uniform_y_axes",
      type: "boolean",
    },
    size: {
      baseName: "size",
      type: "SplitGraphVizSize",
      required: true,
    },
    sourceWidgetDefinition: {
      baseName: "source_widget_definition",
      type: "SplitGraphSourceWidgetDefinition",
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
    type: {
      baseName: "type",
      type: "SplitGraphWidgetDefinitionType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SplitGraphWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
