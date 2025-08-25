/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AsanaCredentials } from "./AsanaCredentials";
import { AsanaIntegrationType } from "./AsanaIntegrationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `AsanaIntegration` object.
*/
export class AsanaIntegration {
  /**
   * The definition of the `AsanaCredentials` object.
  */
  "credentials": AsanaCredentials;
  /**
   * The definition of the `AsanaIntegrationType` object.
  */
  "type": AsanaIntegrationType;

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
      "type": "AsanaCredentials",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "AsanaIntegrationType",
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




    return AsanaIntegration.attributeTypeMap;

  }

  public constructor() {











  }
}









