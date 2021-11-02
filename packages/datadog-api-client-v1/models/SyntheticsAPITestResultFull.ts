/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAPITestResultData } from "./SyntheticsAPITestResultData";
import { SyntheticsAPITestResultFullCheck } from "./SyntheticsAPITestResultFullCheck";
import { SyntheticsTestMonitorStatus } from "./SyntheticsTestMonitorStatus";

export class SyntheticsAPITestResultFull {
  "check"?: SyntheticsAPITestResultFullCheck;
  /**
   * When the API test was conducted.
   */
  "checkTime"?: number;
  /**
   * Version of the API test used.
   */
  "checkVersion"?: number;
  /**
   * Locations for which to query the API test results.
   */
  "probeDc"?: string;
  "result"?: SyntheticsAPITestResultData;
  /**
   * ID of the API test result.
   */
  "resultId"?: string;
  "status"?: SyntheticsTestMonitorStatus;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    check: {
      baseName: "check",
      type: "SyntheticsAPITestResultFullCheck",
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
      type: "SyntheticsAPITestResultData",
    },
    resultId: {
      baseName: "result_id",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "SyntheticsTestMonitorStatus",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsAPITestResultFull.attributeTypeMap;
  }

  public constructor() {}
}
