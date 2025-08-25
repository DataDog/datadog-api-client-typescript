/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudflareAPITokenType } from "./CloudflareAPITokenType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `CloudflareAPIToken` object.
*/
export class CloudflareAPIToken {
  /**
   * The `CloudflareAPIToken` `api_token`.
  */
  "apiToken": string;
  /**
   * The definition of the `CloudflareAPIToken` object.
  */
  "type": CloudflareAPITokenType;

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
    "apiToken": {
      "baseName": "api_token",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "CloudflareAPITokenType",
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




    return CloudflareAPIToken.attributeTypeMap;

  }

  public constructor() {











  }
}









