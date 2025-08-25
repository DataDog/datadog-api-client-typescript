/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOTimeSliceCondition } from "./SLOTimeSliceCondition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
