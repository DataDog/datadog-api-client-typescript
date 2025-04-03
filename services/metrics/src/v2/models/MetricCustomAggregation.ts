import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricCustomSpaceAggregation } from "./MetricCustomSpaceAggregation";
import { MetricCustomTimeAggregation } from "./MetricCustomTimeAggregation";

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
      type: "any",
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
