/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";
import { WildcardWidgetDefinitionType } from "./WildcardWidgetDefinitionType";
import { WildcardWidgetRequest } from "./WildcardWidgetRequest";
import { WildcardWidgetSpecification } from "./WildcardWidgetSpecification";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Custom visualization widget using Vega or Vega-Lite specifications. Combines standard Datadog data requests with a Vega or Vega-Lite JSON specification for flexible, custom visualizations.
 */
export class WildcardWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * List of data requests for the wildcard widget.
   */
  "requests": Array<WildcardWidgetRequest>;
  /**
   * Vega or Vega-Lite specification for custom visualization rendering. See https://vega.github.io/vega-lite/ for the full grammar reference.
   */
  "specification": WildcardWidgetSpecification;
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
   * Type of the wildcard widget.
   */
  "type": WildcardWidgetDefinitionType;

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
    requests: {
      baseName: "requests",
      type: "Array<WildcardWidgetRequest>",
      required: true,
    },
    specification: {
      baseName: "specification",
      type: "WildcardWidgetSpecification",
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
      type: "WildcardWidgetDefinitionType",
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
    return WildcardWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
