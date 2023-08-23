/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ScatterplotDimension } from "./ScatterplotDimension";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Formula to be used in a Scatterplot widget query.
 */
export class ScatterplotWidgetFormula {
  /**
   * Expression alias.
   */
  "alias"?: string;
  /**
   * Dimension of the Scatterplot.
   */
  "dimension": ScatterplotDimension;
  /**
   * String expression built from queries, formulas, and functions.
   */
  "formula": string;

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
      type: "ScatterplotDimension",
      required: true,
    },
    formula: {
      baseName: "formula",
      type: "string",
      required: true,
    },
  };
}
