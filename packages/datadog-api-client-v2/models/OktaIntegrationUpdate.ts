/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OktaCredentialsUpdate } from "./OktaCredentialsUpdate";
import { OktaIntegrationType } from "./OktaIntegrationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `OktaIntegrationUpdate` object.
*/
export class OktaIntegrationUpdate {
  /**
   * The definition of the `OktaCredentialsUpdate` object.
  */
  "credentials"?: OktaCredentialsUpdate;
  /**
   * The definition of the `OktaIntegrationType` object.
  */
  "type": OktaIntegrationType;

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
      "type": "OktaCredentialsUpdate",
    },
    "type": {
      "baseName": "type",
      "type": "OktaIntegrationType",
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




    return OktaIntegrationUpdate.attributeTypeMap;

  }

  public constructor() {











  }
}









