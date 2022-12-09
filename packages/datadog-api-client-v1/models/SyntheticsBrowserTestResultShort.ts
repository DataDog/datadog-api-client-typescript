/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBrowserTestResultShortResult } from "./SyntheticsBrowserTestResultShortResult";
import { SyntheticsTestMonitorStatus } from "./SyntheticsTestMonitorStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object with the results of a single Synthetic browser test.
 */
export class SyntheticsBrowserTestResultShort {
  /**
   * Last time the browser test was performed.
   */
  "checkTime"?: number;
  /**
   * Location from which the Browser test was performed.
   */
  "probeDc"?: string;
  /**
   * Object with the result of the last browser test run.
   */
  "result"?: SyntheticsBrowserTestResultShortResult;
  /**
   * ID of the browser test result.
   */
  "resultId"?: string;
  /**
   * The status of your Synthetic monitor.
   * * `O` for not triggered
   * * `1` for triggered
   * * `2` for no data
   */
  "status"?: SyntheticsTestMonitorStatus;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    checkTime: {
      baseName: "check_time",
      type: "number",
      format: "double",
    },
    probeDc: {
      baseName: "probe_dc",
      type: "string",
    },
    result: {
      baseName: "result",
      type: "SyntheticsBrowserTestResultShortResult",
    },
    resultId: {
      baseName: "result_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "SyntheticsTestMonitorStatus",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsBrowserTestResultShort.attributeTypeMap;
  }

  public constructor() {}
}
