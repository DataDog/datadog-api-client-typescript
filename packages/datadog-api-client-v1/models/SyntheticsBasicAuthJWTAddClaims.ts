/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Standard JWT claims to automatically inject.
*/
export class SyntheticsBasicAuthJWTAddClaims {
  /**
   * Whether to inject the `exp` (expiration) claim.
  */
  "exp"?: boolean;
  /**
   * Whether to inject the `iat` (issued at) claim.
  */
  "iat"?: boolean;

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
    "exp": {
      "baseName": "exp",
      "type": "boolean",
    },
    "iat": {
      "baseName": "iat",
      "type": "boolean",
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




    return SyntheticsBasicAuthJWTAddClaims.attributeTypeMap;

  }

  public constructor() {











  }
}









