/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { QueryValueWidgetDefinitionType } from "./QueryValueWidgetDefinitionType";
import { QueryValueWidgetRequest } from "./QueryValueWidgetRequest";
import { TimeseriesBackground } from "./TimeseriesBackground";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Query values display the current value of a given metric, APM, or log query.
 */
export class QueryValueWidgetDefinition {
  /**
   * Whether to use auto-scaling or not.
   */
  "autoscale"?: boolean;
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * Display a unit of your choice on the widget.
   */
  "customUnit"?: string;
  /**
   * Number of decimals to show. If not defined, the widget uses the raw value.
   */
  "precision"?: number;
  /**
   * Widget definition.
   */
  "requests": [QueryValueWidgetRequest];
  /**
   * How to align the text on the widget.
   */
  "textAlign"?: WidgetTextAlign;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * Set a timeseries on the widget background.
   */
  "timeseriesBackground"?: TimeseriesBackground;
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
   * Type of the query value widget.
   */
  "type": QueryValueWidgetDefinitionType;

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
    autoscale: {
      baseName: "autoscale",
      type: "boolean",
    },
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    customUnit: {
      baseName: "custom_unit",
      type: "string",
    },
    precision: {
      baseName: "precision",
      type: "number",
      format: "int64",
    },
    requests: {
      baseName: "requests",
      type: "[QueryValueWidgetRequest]",
      required: true,
    },
    textAlign: {
      baseName: "text_align",
      type: "WidgetTextAlign",
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
    },
    timeseriesBackground: {
      baseName: "timeseries_background",
      type: "TimeseriesBackground",
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
      type: "QueryValueWidgetDefinitionType",
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
    return QueryValueWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
