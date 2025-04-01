/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuthSigv4Type } from "./SyntheticsBasicAuthSigv4Type";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object to handle `SIGV4` authentication when performing the test.
*/
export class SyntheticsBasicAuthSigv4 {
  /**
   * Access key for the `SIGV4` authentication.
  */
  "accessKey": string;
  /**
   * Region for the `SIGV4` authentication.
  */
  "region"?: string;
  /**
   * Secret key for the `SIGV4` authentication.
  */
  "secretKey": string;
  /**
   * Service name for the `SIGV4` authentication.
  */
  "serviceName"?: string;
  /**
   * Session token for the `SIGV4` authentication.
  */
  "sessionToken"?: string;
  /**
   * The type of authentication to use when performing the test.
  */
  "type": SyntheticsBasicAuthSigv4Type;

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
    "accessKey": {
      "baseName": "accessKey",
      "type": "string",
      "required": true,
    },
    "region": {
      "baseName": "region",
      "type": "string",
    },
    "secretKey": {
      "baseName": "secretKey",
      "type": "string",
      "required": true,
    },
    "serviceName": {
      "baseName": "serviceName",
      "type": "string",
    },
    "sessionToken": {
      "baseName": "sessionToken",
      "type": "string",
    },
    "type": {
      "baseName": "type",
      "type": "SyntheticsBasicAuthSigv4Type",
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




    return SyntheticsBasicAuthSigv4.attributeTypeMap;

  }

  public constructor() {











  }
}









