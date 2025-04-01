/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes used to update an application Key.
*/
export class ApplicationKeyUpdateAttributes {
  /**
   * Name of the application key.
  */
  "name"?: string;
  /**
   * Array of scopes to grant the application key.
  */
  "scopes"?: Array<string>;

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
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "scopes": {
      "baseName": "scopes",
      "type": "Array<string>",
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




    return ApplicationKeyUpdateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









