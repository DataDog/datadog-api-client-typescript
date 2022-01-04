/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAPIStepSubtype } from "./SyntheticsAPIStepSubtype";
import { SyntheticsAssertion } from "./SyntheticsAssertion";
import { SyntheticsParsingOptions } from "./SyntheticsParsingOptions";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";
import { SyntheticsTestRequest } from "./SyntheticsTestRequest";

export class SyntheticsAPIStep {
  /**
   * Determines whether or not to continue with test if this step fails.
   */
  "allowFailure"?: boolean;
  /**
   * Array of assertions used for the test.
   */
  "assertions"?: Array<SyntheticsAssertion>;
  /**
   * Array of values to parse and save as variables from the response.
   */
  "extractedValues"?: Array<SyntheticsParsingOptions>;
  /**
   * Determines whether or not to consider the entire test as failed if this step fails. Can be used only if `allowFailure` is `true`.
   */
  "isCritical"?: boolean;
  /**
   * The name of the step.
   */
  "name"?: string;
  "request"?: SyntheticsTestRequest;
  "retry"?: SyntheticsTestOptionsRetry;
  "subtype"?: SyntheticsAPIStepSubtype;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    allowFailure: {
      baseName: "allowFailure",
      type: "boolean",
    },
    assertions: {
      baseName: "assertions",
      type: "Array<SyntheticsAssertion>",
    },
    extractedValues: {
      baseName: "extractedValues",
      type: "Array<SyntheticsParsingOptions>",
    },
    isCritical: {
      baseName: "isCritical",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    request: {
      baseName: "request",
      type: "SyntheticsTestRequest",
    },
    retry: {
      baseName: "retry",
      type: "SyntheticsTestOptionsRetry",
    },
    subtype: {
      baseName: "subtype",
      type: "SyntheticsAPIStepSubtype",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsAPIStep.attributeTypeMap;
  }

  public constructor() {}
}
