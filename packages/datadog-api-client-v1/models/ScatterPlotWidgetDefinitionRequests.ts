/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScatterPlotRequest } from "./ScatterPlotRequest";
import { ScatterplotTableRequest } from "./ScatterplotTableRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Widget definition.
 */
export class ScatterPlotWidgetDefinitionRequests {
  /**
   * Scatterplot request containing formulas and functions.
   */
  "table"?: ScatterplotTableRequest;
  /**
   * Updated scatter plot.
   */
  "x"?: ScatterPlotRequest;
  /**
   * Updated scatter plot.
   */
  "y"?: ScatterPlotRequest;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    table: {
      type: "ScatterplotTableRequest",
    },
    x: {
      type: "ScatterPlotRequest",
    },
    y: {
      type: "ScatterPlotRequest",
    },
  };
}
