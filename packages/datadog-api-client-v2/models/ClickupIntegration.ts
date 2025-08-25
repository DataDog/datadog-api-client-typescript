/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ClickupCredentials } from "./ClickupCredentials";
import { ClickupIntegrationType } from "./ClickupIntegrationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `ClickupIntegration` object.
*/
export class ClickupIntegration {
  /**
   * The definition of the `ClickupCredentials` object.
  */
  "credentials": ClickupCredentials;
  /**
   * The definition of the `ClickupIntegrationType` object.
  */
  "type": ClickupIntegrationType;

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
      "type": "ClickupCredentials",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "ClickupIntegrationType",
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




    return ClickupIntegration.attributeTypeMap;

  }

  public constructor() {











  }
}









