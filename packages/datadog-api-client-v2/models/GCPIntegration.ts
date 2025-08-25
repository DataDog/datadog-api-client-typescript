/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPCredentials } from "./GCPCredentials";
import { GCPIntegrationType } from "./GCPIntegrationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `GCPIntegration` object.
*/
export class GCPIntegration {
  /**
   * The definition of the `GCPCredentials` object.
  */
  "credentials": GCPCredentials;
  /**
   * The definition of the `GCPIntegrationType` object.
  */
  "type": GCPIntegrationType;

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
      "type": "GCPCredentials",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "GCPIntegrationType",
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




    return GCPIntegration.attributeTypeMap;

  }

  public constructor() {











  }
}









