/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes describing an assignee update operation over a security signal.
*/
export class SignalAssigneeUpdateRequest {
  /**
   * The UUID of the user being assigned. Use empty string to return signal to unassigned.
  */
  "assignee": string;
  /**
   * Version of the updated signal. If server side version is higher, update will be rejected.
  */
  "version"?: number;

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
    "assignee": {
      "baseName": "assignee",
      "type": "string",
      "required": true,
    },
    "version": {
      "baseName": "version",
      "type": "number",
      "format": "int64",
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




    return SignalAssigneeUpdateRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









