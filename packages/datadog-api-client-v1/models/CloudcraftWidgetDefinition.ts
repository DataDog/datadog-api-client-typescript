/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudcraftWidgetDefinitionOverlay } from "./CloudcraftWidgetDefinitionOverlay";
import { CloudcraftWidgetDefinitionProjection } from "./CloudcraftWidgetDefinitionProjection";
import { CloudcraftWidgetDefinitionProvider } from "./CloudcraftWidgetDefinitionProvider";
import { CloudcraftWidgetDefinitionType } from "./CloudcraftWidgetDefinitionType";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * This widget displays a Cloudcraft topology of cloud resources for the selected provider.
 */
export class CloudcraftWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * The description of the widget.
   */
  "description"?: string;
  /**
   * List of tags or attributes used to group the cloud resources in the widget.
   */
  "groupBy": Array<string>;
  /**
   * Search query that visually highlights matching resources in the diagram.
   */
  "highlighted": string;
  /**
   * Overlay applied on top of the Cloudcraft topology.
   */
  "overlay": CloudcraftWidgetDefinitionOverlay;
  /**
   * Filter applied to the selected overlay.
   */
  "overlayFilter": string;
  /**
   * Projection used to render the Cloudcraft topology.
   */
  "projection": CloudcraftWidgetDefinitionProjection;
  /**
   * Cloud provider for the Cloudcraft widget.
   */
  "provider": CloudcraftWidgetDefinitionProvider;
  /**
   * Query string used to filter the cloud resources displayed in the widget.
   */
  "queryString": string;
  /**
   * Whether to show empty outline groups in the diagram.
   */
  "showEmptyGroups": boolean;
  /**
   * Title of your widget.
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
   * Type of Cloudcraft widget.
   */
  "type": CloudcraftWidgetDefinitionType;

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
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
      required: true,
    },
    highlighted: {
      baseName: "highlighted",
      type: "string",
      required: true,
    },
    overlay: {
      baseName: "overlay",
      type: "CloudcraftWidgetDefinitionOverlay",
      required: true,
    },
    overlayFilter: {
      baseName: "overlay_filter",
      type: "string",
      required: true,
    },
    projection: {
      baseName: "projection",
      type: "CloudcraftWidgetDefinitionProjection",
      required: true,
    },
    provider: {
      baseName: "provider",
      type: "CloudcraftWidgetDefinitionProvider",
      required: true,
    },
    queryString: {
      baseName: "query_string",
      type: "string",
      required: true,
    },
    showEmptyGroups: {
      baseName: "show_empty_groups",
      type: "boolean",
      required: true,
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
      type: "CloudcraftWidgetDefinitionType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudcraftWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
