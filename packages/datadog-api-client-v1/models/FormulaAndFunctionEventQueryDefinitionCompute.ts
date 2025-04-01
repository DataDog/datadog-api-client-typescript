/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionEventAggregation } from "./FormulaAndFunctionEventAggregation";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Compute options.
*/
export class FormulaAndFunctionEventQueryDefinitionCompute {
  /**
   * Aggregation methods for event platform queries.
  */
  "aggregation": FormulaAndFunctionEventAggregation;
  /**
   * A time interval in milliseconds.
  */
  "interval"?: number;
  /**
   * Measurable attribute to compute.
  */
  "metric"?: string;

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
    "aggregation": {
      "baseName": "aggregation",
      "type": "FormulaAndFunctionEventAggregation",
      "required": true,
    },
    "interval": {
      "baseName": "interval",
      "type": "number",
      "format": "int64",
    },
    "metric": {
      "baseName": "metric",
      "type": "string",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return FormulaAndFunctionEventQueryDefinitionCompute.attributeTypeMap;

  }

  public constructor() {











  }
}









