/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Alerting time window options.
 */
export class MonitorThresholdWindowOptions {
  /**
   * Describes how long an anomalous metric must be normal before the alert recovers.
   */
  "recoveryWindow"?: string;
  /**
   * Describes how long a metric must be anomalous before an alert triggers.
   */
  "triggerWindow"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    recoveryWindow: {
      baseName: "recovery_window",
      type: "string",
    },
    triggerWindow: {
      baseName: "trigger_window",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorThresholdWindowOptions.attributeTypeMap;
  }

  public constructor() {}
}
