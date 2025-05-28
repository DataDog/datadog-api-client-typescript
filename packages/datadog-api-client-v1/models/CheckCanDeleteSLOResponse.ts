/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CheckCanDeleteSLOResponseData } from "./CheckCanDeleteSLOResponseData";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A service level objective response containing the requested object.
*/
export class CheckCanDeleteSLOResponse {
  /**
   * An array of service level objective objects.
  */
  "data"?: CheckCanDeleteSLOResponseData;
  /**
   * A mapping of SLO id to it's current usages.
  */
  "errors"?: { [key: string]: string; };

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
      "type": "CheckCanDeleteSLOResponseData",
    },
    "errors": {
      "baseName": "errors",
      "type": "{ [key: string]: string; }",
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




    return CheckCanDeleteSLOResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









