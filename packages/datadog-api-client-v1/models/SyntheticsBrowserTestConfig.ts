/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAssertion } from "./SyntheticsAssertion";
import { SyntheticsBrowserVariable } from "./SyntheticsBrowserVariable";
import { SyntheticsTestRequest } from "./SyntheticsTestRequest";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Configuration object for a Synthetic browser test.
 */

export class SyntheticsBrowserTestConfig {
  /**
   * Array of assertions used for the test.
   */
  "assertions": Array<SyntheticsAssertion>;
  "request": SyntheticsTestRequest;
  /**
   * Cookies to be used for the request, using the [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) syntax.
   */
  "setCookie"?: string;
  /**
   * Array of variables used for the test steps.
   */
  "variables"?: Array<SyntheticsBrowserVariable>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    assertions: {
      baseName: "assertions",
      type: "Array<SyntheticsAssertion>",
      format: "",
    },
    request: {
      baseName: "request",
      type: "SyntheticsTestRequest",
      format: "",
    },
    setCookie: {
      baseName: "setCookie",
      type: "string",
      format: "",
    },
    variables: {
      baseName: "variables",
      type: "Array<SyntheticsBrowserVariable>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsBrowserTestConfig.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsBrowserTestConfig {
    const res = new SyntheticsBrowserTestConfig();

    if (data.assertions === undefined) {
      throw new TypeError(
        "missing required attribute 'assertions' on 'SyntheticsBrowserTestConfig' object"
      );
    }
    res.assertions = ObjectSerializer.deserialize(
      data.assertions,
      "Array<SyntheticsAssertion>",
      ""
    );

    if (data.request === undefined) {
      throw new TypeError(
        "missing required attribute 'request' on 'SyntheticsBrowserTestConfig' object"
      );
    }
    res.request = ObjectSerializer.deserialize(
      data.request,
      "SyntheticsTestRequest",
      ""
    );

    res.setCookie = ObjectSerializer.deserialize(data.setCookie, "string", "");

    res.variables = ObjectSerializer.deserialize(
      data.variables,
      "Array<SyntheticsBrowserVariable>",
      ""
    );

    return res;
  }

  static serialize(data: SyntheticsBrowserTestConfig): { [key: string]: any } {
    const attributeTypes = SyntheticsBrowserTestConfig.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.assertions === undefined) {
      throw new TypeError(
        "missing required attribute 'assertions' on 'SyntheticsBrowserTestConfig' object"
      );
    }
    res.assertions = ObjectSerializer.serialize(
      data.assertions,
      "Array<SyntheticsAssertion>",
      ""
    );

    if (data.request === undefined) {
      throw new TypeError(
        "missing required attribute 'request' on 'SyntheticsBrowserTestConfig' object"
      );
    }
    res.request = ObjectSerializer.serialize(
      data.request,
      "SyntheticsTestRequest",
      ""
    );

    res.setCookie = ObjectSerializer.serialize(data.setCookie, "string", "");

    res.variables = ObjectSerializer.serialize(
      data.variables,
      "Array<SyntheticsBrowserVariable>",
      ""
    );

    return res;
  }

  public constructor() {}
}
