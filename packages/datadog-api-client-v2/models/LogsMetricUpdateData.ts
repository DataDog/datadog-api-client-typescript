/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsMetricType } from "./LogsMetricType";
import { LogsMetricUpdateAttributes } from "./LogsMetricUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new log-based metric properties.
 */
export class LogsMetricUpdateData {
  /**
   * The log-based metric properties that will be updated.
   */
  "attributes": LogsMetricUpdateAttributes;
  /**
   * The type of the resource. The value should always be logs_metrics.
   */
  "type": LogsMetricType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "LogsMetricUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsMetricType",
      required: true,
    },
  };
}
