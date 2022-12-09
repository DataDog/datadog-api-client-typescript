/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing the retry strategy to apply to a Synthetic test.
 */
export class SyntheticsTestOptionsRetry {
  /**
   * Number of times a test needs to be retried before marking a
   * location as failed. Defaults to 0.
   */
  "count"?: number;
  /**
   * Time interval between retries (in milliseconds). Defaults to
   * 300ms.
   */
  "interval"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    count: {
      baseName: "count",
      type: "number",
      format: "int64",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestOptionsRetry.attributeTypeMap;
  }

  public constructor() {}
}
