/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestDetailsWithoutSteps } from "./SyntheticsTestDetailsWithoutSteps";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing an array of Synthetic tests configuration.
 */
export class SyntheticsListTestsResponse {
  /**
   * Array of Synthetic tests configuration.
   */
  "tests"?: Array<SyntheticsTestDetailsWithoutSteps>;

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
    tests: {
      baseName: "tests",
      type: "Array<SyntheticsTestDetailsWithoutSteps>",
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
    return SyntheticsListTestsResponse.attributeTypeMap;
  }

  public constructor() {}
}
