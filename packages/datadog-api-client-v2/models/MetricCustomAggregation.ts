/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricCustomSpaceAggregation } from "./MetricCustomSpaceAggregation";
import { MetricCustomTimeAggregation } from "./MetricCustomTimeAggregation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A time and space aggregation combination for use in query.
 */
export class MetricCustomAggregation {
  /**
   * A space aggregation for use in query.
   */
  "space": MetricCustomSpaceAggregation;
  /**
   * A time aggregation for use in query.
   */
  "time": MetricCustomTimeAggregation;

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
    space: {
      baseName: "space",
      type: "MetricCustomSpaceAggregation",
      required: true,
    },
    time: {
      baseName: "time",
      type: "MetricCustomTimeAggregation",
      required: true,
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
    return MetricCustomAggregation.attributeTypeMap;
  }

  public constructor() {}
}
