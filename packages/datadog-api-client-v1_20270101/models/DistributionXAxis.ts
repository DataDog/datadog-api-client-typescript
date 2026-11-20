/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AxisBound } from "./AxisBound";
import { DistributionScaleType } from "./DistributionScaleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DistributionXAxis {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "includeZero"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "max"?: AxisBound;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "min"?: AxisBound;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numBuckets"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "scale"?: DistributionScaleType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    includeZero: {
      baseName: "include_zero",
      type: "boolean",
    },
    max: {
      baseName: "max",
      type: "AxisBound",
    },
    min: {
      baseName: "min",
      type: "AxisBound",
    },
    numBuckets: {
      baseName: "num_buckets",
      type: "number",
      format: "double",
    },
    scale: {
      baseName: "scale",
      type: "DistributionScaleType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DistributionXAxis.attributeTypeMap;
  }

  public constructor() {}
}
