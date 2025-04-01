/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationHttpDestinationAuthCustomHeaderType } from "./CustomDestinationHttpDestinationAuthCustomHeaderType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Custom header access authentication.
*/
export class CustomDestinationHttpDestinationAuthCustomHeader {
  /**
   * The header name of the authentication.
  */
  "headerName": string;
  /**
   * The header value of the authentication. This field is not returned by the API.
  */
  "headerValue": string;
  /**
   * Type of the custom header access authentication.
  */
  "type": CustomDestinationHttpDestinationAuthCustomHeaderType;

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
    "headerName": {
      "baseName": "header_name",
      "type": "string",
      "required": true,
    },
    "headerValue": {
      "baseName": "header_value",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "CustomDestinationHttpDestinationAuthCustomHeaderType",
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




    return CustomDestinationHttpDestinationAuthCustomHeader.attributeTypeMap;

  }

  public constructor() {











  }
}









