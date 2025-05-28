/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORAListFailuresRequestAttributes } from "./DORAListFailuresRequestAttributes";
import { DORAListFailuresRequestDataType } from "./DORAListFailuresRequestDataType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The JSON:API data.
*/
export class DORAListFailuresRequestData {
  /**
   * Attributes to get a list of failures.
  */
  "attributes": DORAListFailuresRequestAttributes;
  /**
   * The definition of `DORAListFailuresRequestDataType` object.
  */
  "type"?: DORAListFailuresRequestDataType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "DORAListFailuresRequestAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "DORAListFailuresRequestDataType",
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




    return DORAListFailuresRequestData.attributeTypeMap;

  }

  public constructor() {











  }
}









