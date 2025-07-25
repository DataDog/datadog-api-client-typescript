/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsMobileStepParams } from "./SyntheticsMobileStepParams";
import { SyntheticsMobileStepType } from "./SyntheticsMobileStepType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The steps used in a Synthetic mobile test.
 */
export class SyntheticsMobileStep {
  /**
   * A boolean set to allow this step to fail.
   */
  "allowFailure"?: boolean;
  /**
   * A boolean set to determine if the step has a new step element.
   */
  "hasNewStepElement"?: boolean;
  /**
   * A boolean to use in addition to `allowFailure` to determine if the test should be marked as failed when the step fails.
   */
  "isCritical"?: boolean;
  /**
   * The name of the step.
   */
  "name": string;
  /**
   * A boolean set to not take a screenshot for the step.
   */
  "noScreenshot"?: boolean;
  /**
   * The parameters of a mobile step.
   */
  "params": SyntheticsMobileStepParams;
  /**
   * The public ID of the step.
   */
  "publicId"?: string;
  /**
   * The time before declaring a step failed.
   */
  "timeout"?: number;
  /**
   * Step type used in your mobile Synthetic test.
   */
  "type": SyntheticsMobileStepType;

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
    hasNewStepElement: {
      baseName: "hasNewStepElement",
      type: "boolean",
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
    noScreenshot: {
      baseName: "noScreenshot",
      type: "boolean",
    },
    params: {
      baseName: "params",
      type: "SyntheticsMobileStepParams",
      required: true,
    },
    publicId: {
      baseName: "publicId",
      type: "string",
    },
    timeout: {
      baseName: "timeout",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "SyntheticsMobileStepType",
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
    return SyntheticsMobileStep.attributeTypeMap;
  }

  public constructor() {}
}
