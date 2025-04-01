/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * AWS Authentication config to integrate your account using an access key pair.
*/
export class AWSAuthConfigKeys {
  /**
   * AWS Access Key ID.
  */
  "accessKeyId": string;
  /**
   * AWS Secret Access Key.
  */
  "secretAccessKey"?: string;

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
    "accessKeyId": {
      "baseName": "access_key_id",
      "type": "string",
      "required": true,
    },
    "secretAccessKey": {
      "baseName": "secret_access_key",
      "type": "string",
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




    return AWSAuthConfigKeys.attributeTypeMap;

  }

  public constructor() {











  }
}









