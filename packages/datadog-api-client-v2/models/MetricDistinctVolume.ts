/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricDistinctVolumeAttributes } from "./MetricDistinctVolumeAttributes";
import { MetricDistinctVolumeType } from "./MetricDistinctVolumeType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object for a single metric's distinct volume.
 */
export class MetricDistinctVolume {
  /**
   * Object containing the definition of a metric's distinct volume.
   */
  "attributes"?: MetricDistinctVolumeAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  /**
   * The metric distinct volume type.
   */
  "type"?: MetricDistinctVolumeType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "MetricDistinctVolumeAttributes",
    },
    id: {
      type: "string",
    },
    type: {
      type: "MetricDistinctVolumeType",
    },
  };
}
