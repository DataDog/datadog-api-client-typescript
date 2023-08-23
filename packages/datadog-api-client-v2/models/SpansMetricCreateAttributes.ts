/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansMetricCompute } from "./SpansMetricCompute";
import { SpansMetricFilter } from "./SpansMetricFilter";
import { SpansMetricGroupBy } from "./SpansMetricGroupBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing the Datadog span-based metric to create.
 */
export class SpansMetricCreateAttributes {
  /**
   * The compute rule to compute the span-based metric.
   */
  "compute": SpansMetricCompute;
  /**
   * The span-based metric filter. Spans matching this filter will be aggregated in this metric.
   */
  "filter"?: SpansMetricFilter;
  /**
   * The rules for the group by.
   */
  "groupBy"?: Array<SpansMetricGroupBy>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      type: "SpansMetricCompute",
      required: true,
    },
    filter: {
      type: "SpansMetricFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<SpansMetricGroupBy>",
    },
  };
}
