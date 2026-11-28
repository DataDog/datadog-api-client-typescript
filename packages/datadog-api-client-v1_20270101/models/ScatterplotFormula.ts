/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScatterPlotDimension } from "./ScatterPlotDimension";
import { ScatterplotFormulaLimit } from "./ScatterplotFormulaLimit";
import { WidgetFormulaStyle } from "./WidgetFormulaStyle";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotFormula {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimension": ScatterPlotDimension;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "formula": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: ScatterplotFormulaLimit;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: WidgetFormulaStyle;

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
    dimension: {
      baseName: "dimension",
      type: "ScatterPlotDimension",
      required: true,
    },
    formula: {
      baseName: "formula",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "ScatterplotFormulaLimit",
    },
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
    style: {
      baseName: "style",
      type: "WidgetFormulaStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotFormula.attributeTypeMap;
  }

  public constructor() {}
}
