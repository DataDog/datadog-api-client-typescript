/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionEventAggregation } from "./FormulaAndFunctionEventAggregation";

export class FormulaAndFunctionEventQueryDefinitionCompute {
  "aggregation": FormulaAndFunctionEventAggregation;
  /**
   * A time interval in milliseconds.
   */
  "interval"?: number;
  /**
   * Measurable attribute to compute.
   */
  "metric"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    aggregation: {
      baseName: "aggregation",
      type: "FormulaAndFunctionEventAggregation",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "number",

      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
  };

  static getAttributeTypeMap() {
    return FormulaAndFunctionEventQueryDefinitionCompute.attributeTypeMap;
  }

  public constructor() {}
}
