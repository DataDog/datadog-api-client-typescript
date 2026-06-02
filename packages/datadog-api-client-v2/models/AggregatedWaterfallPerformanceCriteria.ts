/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AggregatedWaterfallPerformanceCriteriaMetric } from "./AggregatedWaterfallPerformanceCriteriaMetric";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Performance criteria to filter view instances by a metric threshold.
 */
export class AggregatedWaterfallPerformanceCriteria {
  /**
   * Maximum threshold in seconds (inclusive).
   */
  "max"?: number;
  /**
   * Performance metric used to filter view instances by threshold.
   */
  "metric": AggregatedWaterfallPerformanceCriteriaMetric;
  /**
   * Minimum threshold in seconds (inclusive).
   */
  "min"?: number;

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
    max: {
      baseName: "max",
      type: "number",
      format: "double",
    },
    metric: {
      baseName: "metric",
      type: "AggregatedWaterfallPerformanceCriteriaMetric",
      required: true,
    },
    min: {
      baseName: "min",
      type: "number",
      format: "double",
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
    return AggregatedWaterfallPerformanceCriteria.attributeTypeMap;
  }

  public constructor() {}
}
