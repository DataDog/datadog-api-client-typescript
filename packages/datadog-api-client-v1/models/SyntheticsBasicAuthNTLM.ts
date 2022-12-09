/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuthNTLMType } from "./SyntheticsBasicAuthNTLMType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

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
  /**
   * The type of authentication to use when performing the test.
   */
  "type": SyntheticsBasicAuthNTLMType;
  /**
   * Username for the authentication to use when performing the test.
   */
  "username"?: string;
  /**
   * Workstation for the authentication to use when performing the test.
   */
  "workstation"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsBasicAuthNTLM.attributeTypeMap;
  }

  public constructor() {}
}
