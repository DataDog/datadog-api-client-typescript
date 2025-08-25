/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansMetricResponseCompute } from "./SpansMetricResponseCompute";
import { SpansMetricResponseFilter } from "./SpansMetricResponseFilter";
import { SpansMetricResponseGroupBy } from "./SpansMetricResponseGroupBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing a Datadog span-based metric.
 */
export class SpansMetricResponseAttributes {
  /**
   * The compute rule to compute the span-based metric.
   */
  "compute"?: SpansMetricResponseCompute;
  /**
   * The span-based metric filter. Spans matching this filter will be aggregated in this metric.
   */
  "filter"?: SpansMetricResponseFilter;
  /**
   * The rules for the group by.
   */
  "groupBy"?: Array<SpansMetricResponseGroupBy>;

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
    compute: {
      baseName: "compute",
      type: "SpansMetricResponseCompute",
    },
    filter: {
      baseName: "filter",
      type: "SpansMetricResponseFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<SpansMetricResponseGroupBy>",
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
    return SpansMetricResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
