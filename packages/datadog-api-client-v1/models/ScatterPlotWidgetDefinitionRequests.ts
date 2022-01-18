/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ScatterPlotRequest } from "./ScatterPlotRequest";
import { ScatterplotTableRequest } from "./ScatterplotTableRequest";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Widget definition.
 */

export class ScatterPlotWidgetDefinitionRequests {
  "table"?: ScatterplotTableRequest;
  "x"?: ScatterPlotRequest;
  "y"?: ScatterPlotRequest;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    table: {
      baseName: "table",
      type: "ScatterplotTableRequest",
    },
    x: {
      baseName: "x",
      type: "ScatterPlotRequest",
    },
    y: {
      baseName: "y",
      type: "ScatterPlotRequest",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterPlotWidgetDefinitionRequests.attributeTypeMap;
  }

  public constructor() {}
}
