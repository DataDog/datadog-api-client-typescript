/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DistributionWidgetDefinitionType } from "./DistributionWidgetDefinitionType";
import { DistributionWidgetRequest } from "./DistributionWidgetRequest";
import { DistributionWidgetXAxis } from "./DistributionWidgetXAxis";
import { DistributionWidgetYAxis } from "./DistributionWidgetYAxis";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The Distribution visualization is another way of showing metrics aggregated across one or several tags, such as hosts. Unlike the heat map, a distribution graph’s x-axis is quantity rather than time.
 */

export class DistributionWidgetDefinition {
  /**
   * (Deprecated) The widget legend was replaced by a tooltip and sidebar.
   */
  "legendSize"?: string;
  /**
   * List of markers.
   */
  "markers"?: Array<WidgetMarker>;
  /**
   * Array of one request object to display in the widget.  See the dedicated [Request JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/request_json)  to learn how to build the `REQUEST_SCHEMA`.
   */
  "requests": Array<DistributionWidgetRequest>;
  /**
   * (Deprecated) The widget legend was replaced by a tooltip and sidebar.
   */
  "showLegend"?: boolean;
  "time"?: WidgetTime;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  "type": DistributionWidgetDefinitionType;
  "xaxis"?: DistributionWidgetXAxis;
  "yaxis"?: DistributionWidgetYAxis;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    legendSize: {
      baseName: "legend_size",
      type: "string",
      format: "",
    },
    markers: {
      baseName: "markers",
      type: "Array<WidgetMarker>",
      format: "",
    },
    requests: {
      baseName: "requests",
      type: "Array<DistributionWidgetRequest>",
      format: "",
    },
    showLegend: {
      baseName: "show_legend",
      type: "boolean",
      format: "",
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
      format: "",
    },
    title: {
      baseName: "title",
      type: "string",
      format: "",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
      format: "",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "DistributionWidgetDefinitionType",
      format: "",
    },
    xaxis: {
      baseName: "xaxis",
      type: "DistributionWidgetXAxis",
      format: "",
    },
    yaxis: {
      baseName: "yaxis",
      type: "DistributionWidgetYAxis",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return DistributionWidgetDefinition.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): DistributionWidgetDefinition {
    const res = new DistributionWidgetDefinition();

    res.legendSize = ObjectSerializer.deserialize(
      data.legend_size,
      "string",
      ""
    );

    res.markers = ObjectSerializer.deserialize(
      data.markers,
      "Array<WidgetMarker>",
      ""
    );

    if (data.requests === undefined) {
      throw new TypeError(
        "missing required attribute 'requests' on 'DistributionWidgetDefinition' object"
      );
    }
    res.requests = ObjectSerializer.deserialize(
      data.requests,
      "Array<DistributionWidgetRequest>",
      ""
    );

    res.showLegend = ObjectSerializer.deserialize(
      data.show_legend,
      "boolean",
      ""
    );

    res.time = ObjectSerializer.deserialize(data.time, "WidgetTime", "");

    res.title = ObjectSerializer.deserialize(data.title, "string", "");

    if (["center", "left", "right", undefined].includes(data.title_align)) {
      res.titleAlign = data.title_align;
    } else {
      const raw = new DistributionWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.titleSize = ObjectSerializer.deserialize(data.title_size, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'DistributionWidgetDefinition' object"
      );
    }
    if (["distribution", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new DistributionWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.xaxis = ObjectSerializer.deserialize(
      data.xaxis,
      "DistributionWidgetXAxis",
      ""
    );

    res.yaxis = ObjectSerializer.deserialize(
      data.yaxis,
      "DistributionWidgetYAxis",
      ""
    );

    return res;
  }

  static serialize(data: DistributionWidgetDefinition): { [key: string]: any } {
    const attributeTypes = DistributionWidgetDefinition.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.legend_size = ObjectSerializer.serialize(data.legendSize, "string", "");

    res.markers = ObjectSerializer.serialize(
      data.markers,
      "Array<WidgetMarker>",
      ""
    );

    if (data.requests === undefined) {
      throw new TypeError(
        "missing required attribute 'requests' on 'DistributionWidgetDefinition' object"
      );
    }
    res.requests = ObjectSerializer.serialize(
      data.requests,
      "Array<DistributionWidgetRequest>",
      ""
    );

    res.show_legend = ObjectSerializer.serialize(
      data.showLegend,
      "boolean",
      ""
    );

    res.time = ObjectSerializer.serialize(data.time, "WidgetTime", "");

    res.title = ObjectSerializer.serialize(data.title, "string", "");

    if (["center", "left", "right", undefined].includes(data.titleAlign)) {
      res.title_align = data.titleAlign;
    } else {
      throw TypeError(`invalid enum value ${data.titleAlign} for titleAlign`);
    }

    res.title_size = ObjectSerializer.serialize(data.titleSize, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'DistributionWidgetDefinition' object"
      );
    }
    if (["distribution", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    res.xaxis = ObjectSerializer.serialize(
      data.xaxis,
      "DistributionWidgetXAxis",
      ""
    );

    res.yaxis = ObjectSerializer.serialize(
      data.yaxis,
      "DistributionWidgetYAxis",
      ""
    );

    return res;
  }

  public constructor() {}
}
