/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GeminiCredentialsUpdate } from "./GeminiCredentialsUpdate";
import { GeminiIntegrationType } from "./GeminiIntegrationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `GeminiIntegrationUpdate` object.
*/
export class GeminiIntegrationUpdate {
  /**
   * The definition of the `GeminiCredentialsUpdate` object.
  */
  "credentials"?: GeminiCredentialsUpdate;
  /**
   * The definition of the `GeminiIntegrationType` object.
  */
  "type": GeminiIntegrationType;

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
      "type": "GeminiCredentialsUpdate",
    },
    "type": {
      "baseName": "type",
      "type": "GeminiIntegrationType",
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




    return GeminiIntegrationUpdate.attributeTypeMap;

  }

  public constructor() {











  }
}









