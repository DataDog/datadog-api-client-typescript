/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAPISubtestStepSubtype } from "./SyntheticsAPISubtestStepSubtype";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The subtest step used in a Synthetics multi-step API test.
 */
export class SyntheticsAPISubtestStep {
  /**
   * Determines whether or not to continue with test if this step fails.
   */
  "allowFailure"?: boolean;
  /**
   * A boolean set to always execute this step even if the previous step failed or was skipped.
   */
  "alwaysExecute"?: boolean;
  /**
   * Determines whether or not to exit the test if the step succeeds.
   */
  "exitIfSucceed"?: boolean;
  /**
   * Generate variables using JavaScript.
   */
  "extractedValuesFromScript"?: string;
  /**
   * ID of the step.
   */
  "id"?: string;
  /**
   * Determines whether or not to consider the entire test as failed if this step fails.
   * Can be used only if `allowFailure` is `true`.
   */
  "isCritical"?: boolean;
  /**
   * The name of the step.
   */
  "name": string;
  /**
   * Object describing the retry strategy to apply to a Synthetic test.
   */
  "retry"?: SyntheticsTestOptionsRetry;
  /**
   * Public ID of the test to be played as part of a `playSubTest` step type.
   */
  "subtestPublicId": string;
  /**
   * The subtype of the Synthetic multi-step API subtest step.
   */
  "subtype": SyntheticsAPISubtestStepSubtype;

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
    extractedValuesFromScript: {
      baseName: "extractedValuesFromScript",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    isCritical: {
      baseName: "isCritical",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    retry: {
      baseName: "retry",
      type: "SyntheticsTestOptionsRetry",
    },
    subtestPublicId: {
      baseName: "subtestPublicId",
      type: "string",
      required: true,
    },
    subtype: {
      baseName: "subtype",
      type: "SyntheticsAPISubtestStepSubtype",
      required: true,
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
    return SyntheticsAPISubtestStep.attributeTypeMap;
  }

  public constructor() {}
}
