/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScatterplotDimension } from "./ScatterplotDimension";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A single dimension mapping for a scatterplot data projection.
 */
export class ScatterplotDataProjectionDimension {
  /**
   * Display alias for the dimension.
   */
  "alias"?: string;
  /**
   * The column name from the data source.
   */
  "column": string;
  /**
   * Dimension of the Scatterplot.
   */
  "dimension": ScatterplotDimension;
  /**
   * Number format options for the widget.
   */
  "numberFormat"?: WidgetNumberFormat;

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
    alias: {
      baseName: "alias",
      type: "string",
    },
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    dimension: {
      baseName: "dimension",
      type: "ScatterplotDimension",
      required: true,
    },
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
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
    return ScatterplotDataProjectionDimension.attributeTypeMap;
  }

  public constructor() {}
}
