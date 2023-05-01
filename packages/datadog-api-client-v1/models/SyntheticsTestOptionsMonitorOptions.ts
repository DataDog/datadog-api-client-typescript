/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the options for a Synthetic test as a monitor
 * (for example, renotification).
 */
export class SyntheticsTestOptionsMonitorOptions {
  /**
   * Time interval before renotifying if the test is still failing
   * (in minutes).
   */
  "renotifyInterval"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    renotifyInterval: {
      baseName: "renotify_interval",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestOptionsMonitorOptions.attributeTypeMap;
  }

  public constructor() {}
}
