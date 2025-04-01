/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomDestinationResponseHttpDestinationAuthBasicType } from "./CustomDestinationResponseHttpDestinationAuthBasicType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Basic access authentication.
*/
export class CustomDestinationResponseHttpDestinationAuthBasic {
  /**
   * Type of the basic access authentication.
  */
  "type": CustomDestinationResponseHttpDestinationAuthBasicType;

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
    "type": {
      "baseName": "type",
      "type": "CustomDestinationResponseHttpDestinationAuthBasicType",
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




    return CustomDestinationResponseHttpDestinationAuthBasic.attributeTypeMap;

  }

  public constructor() {











  }
}









