/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAPITestStepSubtype } from "./SyntheticsAPITestStepSubtype";
import { SyntheticsAssertion } from "./SyntheticsAssertion";
import { SyntheticsParsingOptions } from "./SyntheticsParsingOptions";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";
import { SyntheticsTestRequest } from "./SyntheticsTestRequest";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The Test step used in a Synthetic multi-step API test.
*/
export class SyntheticsAPITestStep {
  /**
   * Determines whether or not to continue with test if this step fails.
  */
  "allowFailure"?: boolean;
  /**
   * Array of assertions used for the test.
  */
  "assertions": Array<SyntheticsAssertion>;
  /**
   * Determines whether or not to exit the test if the step succeeds.
  */
  "exitIfSucceed"?: boolean;
  /**
   * Array of values to parse and save as variables from the response.
  */
  "extractedValues"?: Array<SyntheticsParsingOptions>;
  /**
   * Generate variables using JavaScript.
  */
  "extractedValuesFromScript"?: string;
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
   * Object describing the Synthetic test request.
  */
  "request": SyntheticsTestRequest;
  /**
   * Object describing the retry strategy to apply to a Synthetic test.
  */
  "retry"?: SyntheticsTestOptionsRetry;
  /**
   * The subtype of the Synthetic multi-step API test step.
  */
  "subtype": SyntheticsAPITestStepSubtype;

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
    "allowFailure": {
      "baseName": "allowFailure",
      "type": "boolean",
    },
    "assertions": {
      "baseName": "assertions",
      "type": "Array<SyntheticsAssertion>",
      "required": true,
    },
    "exitIfSucceed": {
      "baseName": "exitIfSucceed",
      "type": "boolean",
    },
    "extractedValues": {
      "baseName": "extractedValues",
      "type": "Array<SyntheticsParsingOptions>",
    },
    "extractedValuesFromScript": {
      "baseName": "extractedValuesFromScript",
      "type": "string",
    },
    "isCritical": {
      "baseName": "isCritical",
      "type": "boolean",
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "request": {
      "baseName": "request",
      "type": "SyntheticsTestRequest",
      "required": true,
    },
    "retry": {
      "baseName": "retry",
      "type": "SyntheticsTestOptionsRetry",
    },
    "subtype": {
      "baseName": "subtype",
      "type": "SyntheticsAPITestStepSubtype",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return SyntheticsAPITestStep.attributeTypeMap;

  }

  public constructor() {











  }
}









