/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TokenType } from "./TokenType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of `HTTPTokenUpdate` object.
*/
export class HTTPTokenUpdate {
  /**
   * Should the header be deleted.
  */
  "deleted"?: boolean;
  /**
   * The `HTTPToken` `name`.
  */
  "name": string;
  /**
   * The definition of `TokenType` object.
  */
  "type": TokenType;
  /**
   * The `HTTPToken` `value`.
  */
  "value": string;

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
    "deleted": {
      "baseName": "deleted",
      "type": "boolean",
    },
    "name": {
      "baseName": "name",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "TokenType",
      "required": true,
    },
    "value": {
      "baseName": "value",
      "type": "string",
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




    return HTTPTokenUpdate.attributeTypeMap;

  }

  public constructor() {











  }
}









