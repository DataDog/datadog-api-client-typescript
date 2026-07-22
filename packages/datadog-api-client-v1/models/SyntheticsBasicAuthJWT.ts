/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuthJWTAddClaims } from "./SyntheticsBasicAuthJWTAddClaims";
import { SyntheticsBasicAuthJWTAlgorithm } from "./SyntheticsBasicAuthJWTAlgorithm";
import { SyntheticsBasicAuthJWTType } from "./SyntheticsBasicAuthJWTType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object to handle JWT authentication when performing the test.
*/
export class SyntheticsBasicAuthJWT {
  /**
   * Standard JWT claims to automatically inject.
  */
  "addClaims"?: SyntheticsBasicAuthJWTAddClaims;
  /**
   * Algorithm to use for the JWT authentication.
  */
  "algorithm": SyntheticsBasicAuthJWTAlgorithm;
  /**
   * Token time-to-live in seconds.
  */
  "expiresIn"?: number;
  /**
   * Custom JWT header as a JSON string.
  */
  "header"?: string;
  /**
   * JWT claims as a JSON string.
  */
  "payload": string;
  /**
   * Signing key for the JWT authentication. Use the shared secret for `HS256`
   * or the private key (PEM format) for `RS256` and `ES256`.
  */
  "secret": string;
  /**
   * Prefix added before the token in the `Authorization` header. Defaults to `Bearer`.
  */
  "tokenPrefix"?: string;
  /**
   * The type of authentication to use when performing the test.
  */
  "type": SyntheticsBasicAuthJWTType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "addClaims": {
      "baseName": "addClaims",
      "type": "SyntheticsBasicAuthJWTAddClaims",
    },
    "algorithm": {
      "baseName": "algorithm",
      "type": "SyntheticsBasicAuthJWTAlgorithm",
      "required": true,
    },
    "expiresIn": {
      "baseName": "expiresIn",
      "type": "number",
      "format": "int64",
    },
    "header": {
      "baseName": "header",
      "type": "string",
    },
    "payload": {
      "baseName": "payload",
      "type": "string",
      "required": true,
    },
    "secret": {
      "baseName": "secret",
      "type": "string",
      "required": true,
    },
    "tokenPrefix": {
      "baseName": "tokenPrefix",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "SyntheticsBasicAuthJWTType",
      "required": true,
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




    return SyntheticsBasicAuthJWT.attributeTypeMap;

  }

  public constructor() {











  }
}









