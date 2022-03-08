/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ScatterplotDimension } from "./ScatterplotDimension";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Formula to be used in a Scatterplot widget query.
 */

export class ScatterplotWidgetFormula {
  /**
   * Expression alias.
   */
  "alias"?: string;
  "dimension": ScatterplotDimension;
  /**
   * String expression built from queries, formulas, and functions.
   */
  "formula": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotWidgetFormula.attributeTypeMap;
  }

  public constructor() {}
}
