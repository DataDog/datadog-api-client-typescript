/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * The proxy to perform the test.
 */
export class SyntheticsTestRequestProxy {
  /**
   * Headers to include when performing the test.
   */
  "headers"?: { [key: string]: string };
  /**
   * URL of the proxy to perform the test.
   */
  "url": string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    headers: {
      baseName: "headers",
      type: "{ [key: string]: string; }",
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestRequestProxy.attributeTypeMap;
  }

  public constructor() {}
}
