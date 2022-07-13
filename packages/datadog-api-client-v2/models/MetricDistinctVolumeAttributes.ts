/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the definition of a metric's distinct volume.
 */
export class MetricDistinctVolumeAttributes {
  /**
   * Distinct volume for the given metric.
   */
  "distinctVolume"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    distinctVolume: {
      baseName: "distinct_volume",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricDistinctVolumeAttributes.attributeTypeMap;
  }

  public constructor() {}
}
