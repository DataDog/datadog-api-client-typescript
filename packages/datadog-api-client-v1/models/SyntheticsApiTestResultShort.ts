/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAPITestResultShortResult } from "./SyntheticsAPITestResultShortResult";
import { SyntheticsTestMonitorStatus } from "./SyntheticsTestMonitorStatus";

import { AttributeTypeMap } from "../util";

/**
 * Object with the results of a single Synthetic API test.
 */
export class SyntheticsAPITestResultShort {
  /**
   * Last time the API test was performed.
   */
  "checkTime"?: number;
  /**
   * Location from which the API test was performed.
   */
  "probeDc"?: string;
  /**
   * Result of the last API test run.
   */
  "result"?: SyntheticsAPITestResultShortResult;
  /**
   * ID of the API test result.
   */
  "resultId"?: string;
  /**
   * The status of your Synthetic monitor. * `O` for not triggered * `1` for triggered * `2` for no data
   */
  "status"?: SyntheticsTestMonitorStatus;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

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
      type: "SyntheticsAPITestResultShortResult",
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
    return SyntheticsAPITestResultShort.attributeTypeMap;
  }

  public constructor() {}
}
