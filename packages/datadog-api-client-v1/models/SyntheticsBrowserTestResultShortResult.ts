/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsDevice } from "./SyntheticsDevice";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object with the result of the last browser test run.
 */
export class SyntheticsBrowserTestResultShortResult {
  /**
   * Object describing the device used to perform the Synthetic test.
   */
  "device"?: SyntheticsDevice;
  /**
   * Length in milliseconds of the browser test run.
   */
  "duration"?: number;
  /**
   * Amount of errors collected for a single browser test run.
   */
  "errorCount"?: number;
  /**
   * Amount of browser test steps completed before failing.
   */
  "stepCountCompleted"?: number;
  /**
   * Total amount of browser test steps.
   */
  "stepCountTotal"?: number;

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
      type: "SyntheticsDevice",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "double",
    },
    errorCount: {
      baseName: "errorCount",
      type: "number",
      format: "int64",
    },
    stepCountCompleted: {
      baseName: "stepCountCompleted",
      type: "number",
      format: "int64",
    },
    stepCountTotal: {
      baseName: "stepCountTotal",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsBrowserTestResultShortResult.attributeTypeMap;
  }

  public constructor() {}
}
