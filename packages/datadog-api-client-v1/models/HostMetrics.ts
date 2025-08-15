/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Host Metrics collected.
 */
export class HostMetrics {
  /**
   * The percent of CPU used (everything but idle).
   */
  "cpu"?: number;
  /**
   * The percent of CPU spent waiting on the IO (not reported for all platforms).
   */
  "iowait"?: number;
  /**
   * The system load over the last 15 minutes.
   */
  "load"?: number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cpu: {
      baseName: "cpu",
      type: "number",
      format: "double",
    },
    iowait: {
      baseName: "iowait",
      type: "number",
      format: "double",
    },
    load: {
      baseName: "load",
      type: "number",
      format: "double",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostMetrics.attributeTypeMap;
  }

  public constructor() {}
}
