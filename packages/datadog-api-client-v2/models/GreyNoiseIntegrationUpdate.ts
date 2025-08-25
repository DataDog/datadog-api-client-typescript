/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GreyNoiseCredentialsUpdate } from "./GreyNoiseCredentialsUpdate";
import { GreyNoiseIntegrationType } from "./GreyNoiseIntegrationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `GreyNoiseIntegrationUpdate` object.
*/
export class GreyNoiseIntegrationUpdate {
  /**
   * The definition of the `GreyNoiseCredentialsUpdate` object.
  */
  "credentials"?: GreyNoiseCredentialsUpdate;
  /**
   * The definition of the `GreyNoiseIntegrationType` object.
  */
  "type": GreyNoiseIntegrationType;

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
      "type": "GreyNoiseCredentialsUpdate",
    },
    "type": {
      "baseName": "type",
      "type": "GreyNoiseIntegrationType",
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




    return GreyNoiseIntegrationUpdate.attributeTypeMap;

  }

  public constructor() {











  }
}









