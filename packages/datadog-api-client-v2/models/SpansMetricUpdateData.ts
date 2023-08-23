/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SpansMetricType } from "./SpansMetricType";
import { SpansMetricUpdateAttributes } from "./SpansMetricUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new span-based metric properties.
 */
export class SpansMetricUpdateData {
  /**
   * The span-based metric properties that will be updated.
   */
  "attributes": SpansMetricUpdateAttributes;
  /**
   * The type of resource. The value should always be spans_metrics.
   */
  "type": SpansMetricType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      type: "SpansMetricUpdateAttributes",
      required: true,
    },
    type: {
      type: "SpansMetricType",
      required: true,
    },
  };
}
