/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CustomConnectionAttributesOnPremRunner } from "./CustomConnectionAttributesOnPremRunner";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The custom connection attributes.
*/
export class CustomConnectionAttributes {
  /**
   * The name of the custom connection.
  */
  "name"?: string;
  /**
   * Information about the Private Action Runner used by the custom connection, if the custom connection is associated with a Private Action Runner.
  */
  "onPremRunner"?: CustomConnectionAttributesOnPremRunner;

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
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "onPremRunner": {
      "baseName": "onPremRunner",
      "type": "CustomConnectionAttributesOnPremRunner",
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




    return CustomConnectionAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









