/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DatadogCredentials } from "./DatadogCredentials";
import { DatadogIntegrationType } from "./DatadogIntegrationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The definition of the `DatadogIntegration` object.
*/
export class DatadogIntegration {
  /**
   * The definition of the `DatadogCredentials` object.
  */
  "credentials": DatadogCredentials;
  /**
   * The definition of the `DatadogIntegrationType` object.
  */
  "type": DatadogIntegrationType;

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
      "type": "DatadogCredentials",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "DatadogIntegrationType",
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




    return DatadogIntegration.attributeTypeMap;

  }

  public constructor() {











  }
}









