/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ComparisonDuration } from "./ComparisonDuration";
import { QueryValueWidgetComparisonDirectionality } from "./QueryValueWidgetComparisonDirectionality";
import { QueryValueWidgetComparisonType } from "./QueryValueWidgetComparisonType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A change indicator that compares the current value to a historical period.
 */
export class QueryValueWidgetComparison {
  /**
   * Color-coding direction: `increase_better` (green on rise), `decrease_better` (green on drop), or `neutral` (no color).
   */
  "directionality"?: QueryValueWidgetComparisonDirectionality;
  /**
   * The comparison period. Use a preset `type` value or set `type` to `custom_timeframe` and provide `custom_timeframe` with explicit millisecond epoch bounds.
   */
  "duration": ComparisonDuration;
  /**
   * How the delta is expressed: `absolute` (raw difference), `relative` (percentage), or `both`.
   */
  "type"?: QueryValueWidgetComparisonType;

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
    directionality: {
      baseName: "directionality",
      type: "QueryValueWidgetComparisonDirectionality",
    },
    duration: {
      baseName: "duration",
      type: "ComparisonDuration",
      required: true,
    },
    type: {
      baseName: "type",
      type: "QueryValueWidgetComparisonType",
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
    return QueryValueWidgetComparison.attributeTypeMap;
  }

  public constructor() {}
}
