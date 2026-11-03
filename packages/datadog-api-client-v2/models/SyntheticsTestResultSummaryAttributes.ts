/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultDevice } from "./SyntheticsTestResultDevice";
import { SyntheticsTestResultExecutionInfo } from "./SyntheticsTestResultExecutionInfo";
import { SyntheticsTestResultLocation } from "./SyntheticsTestResultLocation";
import { SyntheticsTestResultRunType } from "./SyntheticsTestResultRunType";
import { SyntheticsTestResultStatus } from "./SyntheticsTestResultStatus";
import { SyntheticsTestResultStepsInfo } from "./SyntheticsTestResultStepsInfo";
import { SyntheticsTestSubType } from "./SyntheticsTestSubType";
import { SyntheticsTestType } from "./SyntheticsTestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a Synthetic test result summary.
 */
export class SyntheticsTestResultSummaryAttributes {
  /**
   * Device information for the test result (browser and mobile tests).
   */
  "device"?: SyntheticsTestResultDevice;
  /**
   * Execution details for a Synthetic test result.
   */
  "executionInfo"?: SyntheticsTestResultExecutionInfo;
  /**
   * Timestamp of when the test finished (in milliseconds).
   */
  "finishedAt"?: number;
  /**
   * Location information for a Synthetic test result.
   */
  "location"?: SyntheticsTestResultLocation;
  /**
   * The type of run for a Synthetic test result.
   */
  "runType"?: SyntheticsTestResultRunType;
  /**
   * Timestamp of when the test started (in milliseconds).
   */
  "startedAt"?: number;
  /**
   * Status of a Synthetic test result.
   */
  "status"?: SyntheticsTestResultStatus;
  /**
   * Step execution summary for a Synthetic test result.
   */
  "stepsInfo"?: SyntheticsTestResultStepsInfo;
  /**
   * Subtype of the Synthetic test that produced this result.
   */
  "testSubType"?: SyntheticsTestSubType;
  /**
   * Type of the Synthetic test that produced this result.
   */
  "testType"?: SyntheticsTestType;

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
      type: "SyntheticsTestResultDevice",
    },
    executionInfo: {
      baseName: "execution_info",
      type: "SyntheticsTestResultExecutionInfo",
    },
    finishedAt: {
      baseName: "finished_at",
      type: "number",
      format: "int64",
    },
    location: {
      baseName: "location",
      type: "SyntheticsTestResultLocation",
    },
    runType: {
      baseName: "run_type",
      type: "SyntheticsTestResultRunType",
    },
    startedAt: {
      baseName: "started_at",
      type: "number",
      format: "int64",
    },
    status: {
      baseName: "status",
      type: "SyntheticsTestResultStatus",
    },
    stepsInfo: {
      baseName: "steps_info",
      type: "SyntheticsTestResultStepsInfo",
    },
    testSubType: {
      baseName: "test_sub_type",
      type: "SyntheticsTestSubType",
    },
    testType: {
      baseName: "test_type",
      type: "SyntheticsTestType",
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
    return SyntheticsTestResultSummaryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
