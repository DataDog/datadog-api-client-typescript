/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { VirusTotalCredentialsUpdate } from "./VirusTotalCredentialsUpdate";
import { VirusTotalIntegrationType } from "./VirusTotalIntegrationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `VirusTotalIntegrationUpdate` object.
*/
export class VirusTotalIntegrationUpdate {
  /**
   * The definition of the `VirusTotalCredentialsUpdate` object.
  */
  "credentials"?: VirusTotalCredentialsUpdate;
  /**
   * The definition of the `VirusTotalIntegrationType` object.
  */
  "type": VirusTotalIntegrationType;

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
      "type": "VirusTotalCredentialsUpdate",
    },
    "type": {
      "baseName": "type",
      "type": "VirusTotalIntegrationType",
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




    return VirusTotalIntegrationUpdate.attributeTypeMap;

  }

  public constructor() {











  }
}









