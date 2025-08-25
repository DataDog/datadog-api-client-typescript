/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfigCatSDKKeyType } from "./ConfigCatSDKKeyType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `ConfigCatSDKKey` object.
*/
export class ConfigCatSDKKey {
  /**
   * The `ConfigCatSDKKey` `api_password`.
  */
  "apiPassword": string;
  /**
   * The `ConfigCatSDKKey` `api_username`.
  */
  "apiUsername": string;
  /**
   * The `ConfigCatSDKKey` `sdk_key`.
  */
  "sdkKey": string;
  /**
   * The definition of the `ConfigCatSDKKey` object.
  */
  "type": ConfigCatSDKKeyType;

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
    "apiPassword": {
      "baseName": "api_password",
      "type": "string",
      "required": true,
    },
    "apiUsername": {
      "baseName": "api_username",
      "type": "string",
      "required": true,
    },
    "sdkKey": {
      "baseName": "sdk_key",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "ConfigCatSDKKeyType",
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




    return ConfigCatSDKKey.attributeTypeMap;

  }

  public constructor() {











  }
}









