/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuthDigestType } from "./SyntheticsBasicAuthDigestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object to handle digest authentication when performing the test.
 */
export class SyntheticsBasicAuthDigest {
  /**
   * Password to use for the digest authentication.
   */
  "password": string;
  /**
   * The type of basic authentication to use when performing the test.
   */
  "type": SyntheticsBasicAuthDigestType;
  /**
   * Username to use for the digest authentication.
   */
  "username": string;

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
    password: {
      baseName: "password",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsBasicAuthDigestType",
      required: true,
    },
    username: {
      baseName: "username",
      type: "string",
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
    return SyntheticsBasicAuthDigest.attributeTypeMap;
  }

  public constructor() {}
}
