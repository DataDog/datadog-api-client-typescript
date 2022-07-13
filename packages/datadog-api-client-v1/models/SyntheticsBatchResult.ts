/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsDeviceID } from "./SyntheticsDeviceID";
import { SyntheticsStatus } from "./SyntheticsStatus";
import { SyntheticsTestDetailsType } from "./SyntheticsTestDetailsType";
import { SyntheticsTestExecutionRule } from "./SyntheticsTestExecutionRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object with the results of a Synthetics batch.
 */
export class SyntheticsBatchResult {
  /**
   * The device ID.
   */
  "device"?: SyntheticsDeviceID;
  /**
   * Total duration in millisecond of the test.
   */
  "duration"?: number;
  /**
   * Execution rule for a Synthetics test.
   */
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
   * Number of times this result has been retried.
   */
  "retries"?: number;
  /**
   * Determines whether or not the batch has passed, failed, or is in progress.
   */
  "status"?: SyntheticsStatus;
  /**
   * Name of the test.
   */
  "testName"?: string;
  /**
   * The public ID of the Synthetic test.
   */
  "testPublicId"?: string;
  /**
   * Type of the Synthetic test, either `api` or `browser`.
   */
  "testType"?: SyntheticsTestDetailsType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsBatchResult.attributeTypeMap;
  }

  public constructor() {}
}
