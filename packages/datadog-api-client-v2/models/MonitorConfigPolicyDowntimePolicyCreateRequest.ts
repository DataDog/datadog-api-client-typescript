/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Downtime duration attributes of a monitor configuration policy.
 */
export class MonitorConfigPolicyDowntimePolicyCreateRequest {
  /**
   * The maximum allowed downtime duration, in milliseconds.
   */
  "maxDurationMs": number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    maxDurationMs: {
      baseName: "max_duration_ms",
      type: "number",
      required: true,
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorConfigPolicyDowntimePolicyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
