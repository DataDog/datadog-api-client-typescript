/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMResponsePage } from "./RUMResponsePage";
import { RUMResponseStatus } from "./RUMResponseStatus";
import { RUMWarning } from "./RUMWarning";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The metadata associated with a request.
*/
export class RUMResponseMetadata {
  /**
   * The time elapsed in milliseconds.
  */
  "elapsed"?: number;
  /**
   * Paging attributes.
  */
  "page"?: RUMResponsePage;
  /**
   * The identifier of the request.
  */
  "requestId"?: string;
  /**
   * The status of the response.
  */
  "status"?: RUMResponseStatus;
  /**
   * A list of warnings (non-fatal errors) encountered. Partial results may return if
   * warnings are present in the response.
  */
  "warnings"?: Array<RUMWarning>;

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
    "page": {
      "baseName": "page",
      "type": "RUMResponsePage",
    },
    "requestId": {
      "baseName": "request_id",
      "type": "string",
    },
    "status": {
      "baseName": "status",
      "type": "RUMResponseStatus",
    },
    "warnings": {
      "baseName": "warnings",
      "type": "Array<RUMWarning>",
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




    return RUMResponseMetadata.attributeTypeMap;

  }

  public constructor() {











  }
}









