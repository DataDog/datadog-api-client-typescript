/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBrowserTestResultData } from "./SyntheticsBrowserTestResultData";
import { SyntheticsBrowserTestResultFullCheck } from "./SyntheticsBrowserTestResultFullCheck";
import { SyntheticsTestMonitorStatus } from "./SyntheticsTestMonitorStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object returned describing a browser test result.
 */
export class SyntheticsBrowserTestResultFull {
  /**
   * Object describing the browser test configuration.
   */
  "check"?: SyntheticsBrowserTestResultFullCheck;
  /**
   * When the browser test was conducted.
   */
  "checkTime"?: number;
  /**
   * Version of the browser test used.
   */
  "checkVersion"?: number;
  /**
   * Location from which the browser test was performed.
   */
  "probeDc"?: string;
  /**
   * Object containing results for your Synthetic browser test.
   */
  "result"?: SyntheticsBrowserTestResultData;
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
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    check: {
      baseName: "check",
      type: "SyntheticsBrowserTestResultFullCheck",
    },
    checkTime: {
      baseName: "check_time",
      type: "number",
      format: "double",
    },
    checkVersion: {
      baseName: "check_version",
      type: "number",
      format: "int64",
    },
    probeDc: {
      baseName: "probe_dc",
      type: "string",
    },
    result: {
      baseName: "result",
      type: "SyntheticsBrowserTestResultData",
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
    return SyntheticsBrowserTestResultFull.attributeTypeMap;
  }

  public constructor() {}
}
