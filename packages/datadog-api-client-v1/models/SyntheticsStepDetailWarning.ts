/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsWarningType } from "./SyntheticsWarningType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object collecting warnings for a given step.
*/
export class SyntheticsStepDetailWarning {
  /**
   * Message for the warning.
  */
  "message": string;
  /**
   * User locator used.
  */
  "type": SyntheticsWarningType;

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
    "message": {
      "baseName": "message",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "SyntheticsWarningType",
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




    return SyntheticsStepDetailWarning.attributeTypeMap;

  }

  public constructor() {











  }
}









