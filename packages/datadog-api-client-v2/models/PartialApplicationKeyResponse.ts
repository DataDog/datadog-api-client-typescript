/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationKeyResponseIncludedItem } from "./ApplicationKeyResponseIncludedItem";
import { PartialApplicationKey } from "./PartialApplicationKey";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response for retrieving a partial application key.
*/
export class PartialApplicationKeyResponse {
  /**
   * Partial Datadog application key.
  */
  "data"?: PartialApplicationKey;
  /**
   * Array of objects related to the application key.
  */
  "included"?: Array<ApplicationKeyResponseIncludedItem>;

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
      "type": "PartialApplicationKey",
    },
    "included": {
      "baseName": "included",
      "type": "Array<ApplicationKeyResponseIncludedItem>",
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




    return PartialApplicationKeyResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









