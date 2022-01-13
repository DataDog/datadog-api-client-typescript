/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBasicAuthNTLMType } from "./SyntheticsBasicAuthNTLMType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Object to handle `NTLM` authentication when performing the test.
 */

export class SyntheticsBasicAuthNTLM {
  /**
   * Domain for the authentication to use when performing the test.
   */
  "domain"?: string;
  /**
   * Password for the authentication to use when performing the test.
   */
  "password"?: string;
  "type": SyntheticsBasicAuthNTLMType;
  /**
   * Username for the authentication to use when performing the test.
   */
  "username"?: string;
  /**
   * Workstation for the authentication to use when performing the test.
   */
  "workstation"?: string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    domain: {
      baseName: "domain",
      type: "string",
    },
    password: {
      baseName: "password",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "SyntheticsBasicAuthNTLMType",
      required: true,
    },
    username: {
      baseName: "username",
      type: "string",
    },
    workstation: {
      baseName: "workstation",
      type: "string",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsBasicAuthNTLM.attributeTypeMap;
  }

  public constructor() {}
}
