/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignal } from "./SecurityMonitoringSignal";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Security Signal response data object.
 */
export class SecurityMonitoringSignalResponse {
  /**
   * Object description of a security signal.
   */
  "data"?: SecurityMonitoringSignal;

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
      type: "SecurityMonitoringSignal",
    },
  };
}
