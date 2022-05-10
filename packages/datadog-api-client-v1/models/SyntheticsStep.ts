/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsStepType } from "./SyntheticsStepType";

import { AttributeTypeMap } from "../util";

/**
 * The steps used in a Synthetics browser test.
 */
export class SyntheticsStep {
  /**
   * A boolean set to allow this step to fail.
   */
  "allowFailure"?: boolean;
  /**
   * A boolean to use in addition to `allowFailure` to determine if the test should be marked as failed when the step fails.
   */
  "isCritical"?: boolean;
  /**
   * The name of the step.
   */
  "name"?: string;
  /**
   * The parameters of the step.
   */
  "params"?: any;
  /**
   * The time before declaring a step failed.
   */
  "timeout"?: number;
  /**
   * Step type used in your Synthetic test.
   */
  "type"?: SyntheticsStepType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    allowFailure: {
      baseName: "allowFailure",
      type: "boolean",
    },
    isCritical: {
      baseName: "isCritical",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    params: {
      baseName: "params",
      type: "any",
    },
    timeout: {
      baseName: "timeout",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "SyntheticsStepType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsStep.attributeTypeMap;
  }

  public constructor() {}
}
