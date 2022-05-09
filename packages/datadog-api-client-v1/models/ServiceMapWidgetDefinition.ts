/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceMapWidgetDefinitionType } from "./ServiceMapWidgetDefinitionType";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";

import { AttributeTypeMap } from "../util";

/**
 * This widget displays a map of a service to all of the services that call it, and all of the services that it calls.
 */
export class ServiceMapWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Your environment and primary tag (or * if enabled for your account).
   */
  "filters": Array<string>;
  /**
   * The ID of the service you want to map.
   */
  "service": string;
  /**
   * The title of your widget.
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
   * Type of the service map widget.
   */
  "type": ServiceMapWidgetDefinitionType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    filters: {
      baseName: "filters",
      type: "Array<string>",
      required: true,
    },
    service: {
      baseName: "service",
      type: "string",
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
      type: "ServiceMapWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceMapWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
