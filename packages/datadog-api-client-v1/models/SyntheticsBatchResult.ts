/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsDeviceID } from "./SyntheticsDeviceID";
import { SyntheticsStatus } from "./SyntheticsStatus";
import { SyntheticsTestDetailsType } from "./SyntheticsTestDetailsType";
import { SyntheticsTestExecutionRule } from "./SyntheticsTestExecutionRule";

export class SyntheticsBatchResult {
  "device"?: SyntheticsDeviceID;
  /**
   * Total duration in millisecond of the test.
   */
  "duration"?: number;
  "executionRule"?: SyntheticsTestExecutionRule;
  /**
   * Name of the location.
   */
  "location"?: string;
  /**
   * The ID of the result to get.
   */
  "resultId"?: string;
  /**
   * Total duration in millisecond of the test.
   */
  "retries"?: number;
  "status"?: SyntheticsStatus;
  /**
   * Name of the test.
   */
  "testName"?: string;
  /**
   * The public ID of the Synthetic test.
   */
  "testPublicId"?: string;
  "testType"?: SyntheticsTestDetailsType;

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
    device: {
      baseName: "device",
      type: "SyntheticsDeviceID",
    },
    duration: {
      baseName: "duration",
      type: "number",

      format: "double",
    },
    executionRule: {
      baseName: "execution_rule",
      type: "SyntheticsTestExecutionRule",
    },
    location: {
      baseName: "location",
      type: "string",
    },
    resultId: {
      baseName: "result_id",
      type: "string",
    },
    retries: {
      baseName: "retries",
      type: "number",

      format: "double",
    },
    status: {
      baseName: "status",
      type: "SyntheticsStatus",
    },
    testName: {
      baseName: "test_name",
      type: "string",
    },
    testPublicId: {
      baseName: "test_public_id",
      type: "string",
    },
    testType: {
      baseName: "test_type",
      type: "SyntheticsTestDetailsType",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsBatchResult.attributeTypeMap;
  }

  public constructor() {}
}
