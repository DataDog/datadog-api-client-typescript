/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HTTPCredentialsUpdate } from "./HTTPCredentialsUpdate";
import { HTTPIntegrationType } from "./HTTPIntegrationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of `HTTPIntegrationUpdate` object.
*/
export class HTTPIntegrationUpdate {
  /**
   * Base HTTP url for the integration
  */
  "baseUrl"?: string;
  /**
   * The definition of `HTTPCredentialsUpdate` object.
  */
  "credentials"?: HTTPCredentialsUpdate;
  /**
   * The definition of `HTTPIntegrationType` object.
  */
  "type": HTTPIntegrationType;

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
    "baseUrl": {
      "baseName": "base_url",
      "type": "string",
    },
    "credentials": {
      "baseName": "credentials",
      "type": "HTTPCredentialsUpdate",
    },
    "type": {
      "baseName": "type",
      "type": "HTTPIntegrationType",
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




    return HTTPIntegrationUpdate.attributeTypeMap;

  }

  public constructor() {











  }
}









