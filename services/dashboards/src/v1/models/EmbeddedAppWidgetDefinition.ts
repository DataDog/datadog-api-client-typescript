import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EmbeddedAppWidgetDefinitionType } from "./EmbeddedAppWidgetDefinitionType";
import { EmbeddedAppWidgetInput } from "./EmbeddedAppWidgetInput";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * The embedded app widget displays an App Builder app on a dashboard. Exactly one of `app_id` or `template_id` must be provided; they cannot be provided together.
 */
export class EmbeddedAppWidgetDefinition {
  /**
   * UUID of the App Builder app to embed.
   */
  "appId"?: string;
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * The description of the widget.
   */
  "description"?: string;
  /**
   * Inputs passed to the embedded app.
   */
  "inputs"?: Array<EmbeddedAppWidgetInput>;
  /**
   * ID of the built-in app template to embed.
   */
  "templateId"?: string;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  /**
   * How to align the text on the widget.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  /**
   * Type of the embedded app widget.
   */
  "type": EmbeddedAppWidgetDefinitionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    appId: {
      baseName: "app_id",
      type: "string",
    },
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    inputs: {
      baseName: "inputs",
      type: "Array<EmbeddedAppWidgetInput>",
    },
    templateId: {
      baseName: "template_id",
      type: "string",
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
      type: "EmbeddedAppWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EmbeddedAppWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
