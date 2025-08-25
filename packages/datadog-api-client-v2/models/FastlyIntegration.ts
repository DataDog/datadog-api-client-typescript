/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FastlyCredentials } from "./FastlyCredentials";
import { FastlyIntegrationType } from "./FastlyIntegrationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `FastlyIntegration` object.
*/
export class FastlyIntegration {
  /**
   * The definition of the `FastlyCredentials` object.
  */
  "credentials": FastlyCredentials;
  /**
   * The definition of the `FastlyIntegrationType` object.
  */
  "type": FastlyIntegrationType;

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
    "credentials": {
      "baseName": "credentials",
      "type": "FastlyCredentials",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "FastlyIntegrationType",
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




    return FastlyIntegration.attributeTypeMap;

  }

  public constructor() {











  }
}









