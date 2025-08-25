/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBatchStatus } from "./SyntheticsBatchStatus";
import { SyntheticsTestDetailsType } from "./SyntheticsTestDetailsType";
import { SyntheticsTestExecutionRule } from "./SyntheticsTestExecutionRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object with the results of a Synthetic batch.
 */
export class SyntheticsBatchResult {
  /**
   * The device ID.
   */
  "device"?: string;
  /**
   * Total duration in millisecond of the test.
   */
  "duration"?: number;
  /**
   * Execution rule for a Synthetic test.
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
   * Determines whether the batch has passed, failed, or is in progress.
   */
  "status"?: SyntheticsBatchStatus;
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
    device: {
      baseName: "device",
      type: "string",
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
      type: "SyntheticsBatchStatus",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
