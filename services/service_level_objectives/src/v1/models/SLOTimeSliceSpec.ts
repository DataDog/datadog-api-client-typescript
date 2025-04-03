import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOTimeSliceCondition } from "./SLOTimeSliceCondition";

/**
 * A time-slice SLI specification.
 */
export class SLOTimeSliceSpec {
  /**
   * The time-slice condition, composed of 3 parts: 1. the metric timeseries query, 2. the comparator,
   * and 3. the threshold. Optionally, a fourth part, the query interval, can be provided.
   */
  "timeSlice": SLOTimeSliceCondition;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    timeSlice: {
      baseName: "time_slice",
      type: "SLOTimeSliceCondition",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOTimeSliceSpec.attributeTypeMap;
  }

  public constructor() {}
}
