/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AuthNMapping } from "./AuthNMapping";
import { AuthNMappingIncluded } from "./AuthNMappingIncluded";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Array of AuthN Mappings response.
*/
export class AuthNMappingsResponse {
  /**
   * Array of returned AuthN Mappings.
  */
  "data"?: Array<AuthNMapping>;
  /**
   * Included data in the AuthN Mapping response.
  */
  "included"?: Array<AuthNMappingIncluded>;
  /**
   * Object describing meta attributes of response.
  */
  "meta"?: ResponseMetaAttributes;

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
    "data": {
      "baseName": "data",
      "type": "Array<AuthNMapping>",
    },
    "included": {
      "baseName": "included",
      "type": "Array<AuthNMappingIncluded>",
    },
    "meta": {
      "baseName": "meta",
      "type": "ResponseMetaAttributes",
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




    return AuthNMappingsResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









