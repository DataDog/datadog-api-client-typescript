/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAssertion } from "./SyntheticsAssertion";
import { SyntheticsBrowserVariable } from "./SyntheticsBrowserVariable";
import { SyntheticsConfigVariable } from "./SyntheticsConfigVariable";
import { SyntheticsTestRequest } from "./SyntheticsTestRequest";

import { AttributeTypeMap } from "../util";

/**
 * Configuration object for a Synthetic browser test.
 */
export class SyntheticsBrowserTestConfig {
  /**
   * Array of assertions used for the test.
   */
  "assertions": Array<SyntheticsAssertion>;
  /**
   * Array of variables used for the test.
   */
  "configVariables"?: Array<SyntheticsConfigVariable>;
  /**
   * Object describing the Synthetic test request.
   */
  "request": SyntheticsTestRequest;
  /**
   * Cookies to be used for the request, using the [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) syntax.
   */
  "setCookie"?: string;
  /**
   * Array of variables used for the test steps.
   */
  "variables"?: Array<SyntheticsBrowserVariable>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    assertions: {
      baseName: "assertions",
      type: "Array<SyntheticsAssertion>",
      required: true,
    },
    configVariables: {
      baseName: "configVariables",
      type: "Array<SyntheticsConfigVariable>",
    },
    request: {
      baseName: "request",
      type: "SyntheticsTestRequest",
      required: true,
    },
    setCookie: {
      baseName: "setCookie",
      type: "string",
    },
    variables: {
      baseName: "variables",
      type: "Array<SyntheticsBrowserVariable>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsBrowserTestConfig.attributeTypeMap;
  }

  public constructor() {}
}
