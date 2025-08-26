/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsStepType } from "./SyntheticsStepType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The steps used in a Synthetic browser test.
 */
export class SyntheticsStep {
  /**
   * A boolean set to allow this step to fail.
   */
  "allowFailure"?: boolean;
  /**
   * A boolean set to always execute this step even if the previous step failed or was skipped.
   */
  "alwaysExecute"?: boolean;
  /**
   * A boolean set to exit the test if the step succeeds.
   */
  "exitIfSucceed"?: boolean;
  /**
   * A boolean to use in addition to `allowFailure` to determine if the test should be marked as failed when the step fails.
   */
  "isCritical"?: boolean;
  /**
   * The name of the step.
   */
  "name"?: string;
  /**
   * A boolean set to skip taking a screenshot for the step.
   */
  "noScreenshot"?: boolean;
  /**
   * The parameters of the step.
   */
  "params"?: any;
  /**
   * The public ID of the step.
   */
  "publicId"?: string;
  /**
   * The time before declaring a step failed.
   */
  "timeout"?: number;
  /**
   * Step type used in your Synthetic test.
   */
  "type"?: SyntheticsStepType;

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
    allowFailure: {
      baseName: "allowFailure",
      type: "boolean",
    },
    alwaysExecute: {
      baseName: "alwaysExecute",
      type: "boolean",
    },
    exitIfSucceed: {
      baseName: "exitIfSucceed",
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
    noScreenshot: {
      baseName: "noScreenshot",
      type: "boolean",
    },
    params: {
      baseName: "params",
      type: "any",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
