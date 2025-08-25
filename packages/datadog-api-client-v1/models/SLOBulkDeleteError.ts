/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOErrorTimeframe } from "./SLOErrorTimeframe";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object describing the error.
*/
export class SLOBulkDeleteError {
  /**
   * The ID of the service level objective object associated with
   * this error.
  */
  "id": string;
  /**
   * The error message.
  */
  "message": string;
  /**
   * The timeframe of the threshold associated with this error
   * or "all" if all thresholds are affected.
  */
  "timeframe": SLOErrorTimeframe;

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
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "message": {
      "baseName": "message",
      "type": "string",
      "required": true,
    },
    "timeframe": {
      "baseName": "timeframe",
      "type": "SLOErrorTimeframe",
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




    return SLOBulkDeleteError.attributeTypeMap;

  }

  public constructor() {











  }
}









