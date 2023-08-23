/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsMetricCreateData } from "./LogsMetricCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new log-based metric body.
 */
export class LogsMetricCreateRequest {
  /**
   * The new log-based metric properties.
   */
  "data": LogsMetricCreateData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "LogsMetricCreateData",
      required: true,
    },
  };
}
