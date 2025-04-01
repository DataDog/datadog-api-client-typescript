/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationHttpDestinationAuthBasicType } from "./CustomDestinationHttpDestinationAuthBasicType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Basic access authentication.
*/
export class CustomDestinationHttpDestinationAuthBasic {
  /**
   * The password of the authentication. This field is not returned by the API.
  */
  "password": string;
  /**
   * Type of the basic access authentication.
  */
  "type": CustomDestinationHttpDestinationAuthBasicType;
  /**
   * The username of the authentication. This field is not returned by the API.
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
    "password": {
      "baseName": "password",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "CustomDestinationHttpDestinationAuthBasicType",
      "required": true,
    },
    "username": {
      "baseName": "username",
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




    return CustomDestinationHttpDestinationAuthBasic.attributeTypeMap;

  }

  public constructor() {











  }
}









