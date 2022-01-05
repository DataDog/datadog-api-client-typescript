/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsStepType } from "./SyntheticsStepType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The steps used in a Synthetics browser test.
 */

export class SyntheticsStep {
  /**
   * A boolean set to allow this step to fail.
   */
  "allowFailure"?: boolean;
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
  "type"?: SyntheticsStepType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    allowFailure: {
      baseName: "allowFailure",
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

  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsStep.attributeTypeMap;
  }

  public constructor() {}
}
