/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AccountFiltersPatchRequestAttributes } from "./AccountFiltersPatchRequestAttributes";
import { AccountFiltersPatchRequestType } from "./AccountFiltersPatchRequestType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Account filters patch data.
*/
export class AccountFiltersPatchData {
  /**
   * Attributes for an account filters patch request.
  */
  "attributes": AccountFiltersPatchRequestAttributes;
  /**
   * Type of account filters patch request.
  */
  "type": AccountFiltersPatchRequestType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

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
      "type": "AccountFiltersPatchRequestAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "AccountFiltersPatchRequestType",
      "required": true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return AccountFiltersPatchData.attributeTypeMap;

  }

  public constructor() {











  }
}









