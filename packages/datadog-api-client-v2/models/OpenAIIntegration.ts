/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAICredentials } from "./OpenAICredentials";
import { OpenAIIntegrationType } from "./OpenAIIntegrationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `OpenAIIntegration` object.
*/
export class OpenAIIntegration {
  /**
   * The definition of the `OpenAICredentials` object.
  */
  "credentials": OpenAICredentials;
  /**
   * The definition of the `OpenAIIntegrationType` object.
  */
  "type": OpenAIIntegrationType;

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
      "type": "OpenAICredentials",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "OpenAIIntegrationType",
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




    return OpenAIIntegration.attributeTypeMap;

  }

  public constructor() {











  }
}









