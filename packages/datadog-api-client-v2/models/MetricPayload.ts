/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricSeries } from "./MetricSeries";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The metrics' payload.
 */
export class MetricPayload {
  /**
   * A list of time series to submit to Datadog.
   */
  "series": Array<MetricSeries>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    series: {
      baseName: "series",
      type: "Array<MetricSeries>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricPayload.attributeTypeMap;
  }

  public constructor() {}
}
