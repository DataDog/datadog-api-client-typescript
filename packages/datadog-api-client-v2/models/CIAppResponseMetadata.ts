/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppResponseStatus } from "./CIAppResponseStatus";
import { CIAppWarning } from "./CIAppWarning";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The metadata associated with a request.
*/
export class CIAppResponseMetadata {
  /**
   * The time elapsed in milliseconds.
  */
  "elapsed"?: number;
  /**
   * The identifier of the request.
  */
  "requestId"?: string;
  /**
   * The status of the response.
  */
  "status"?: CIAppResponseStatus;
  /**
   * A list of warnings (non-fatal errors) encountered. Partial results may return if
   * warnings are present in the response.
  */
  "warnings"?: Array<CIAppWarning>;

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
    "elapsed": {
      "baseName": "elapsed",
      "type": "number",
      "format": "int64",
    },
    "requestId": {
      "baseName": "request_id",
      "type": "string",
    },
    "status": {
      "baseName": "status",
      "type": "CIAppResponseStatus",
    },
    "warnings": {
      "baseName": "warnings",
      "type": "Array<CIAppWarning>",
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




    return CIAppResponseMetadata.attributeTypeMap;

  }

  public constructor() {











  }
}









