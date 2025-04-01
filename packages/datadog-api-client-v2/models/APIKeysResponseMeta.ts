/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APIKeysResponseMetaPage } from "./APIKeysResponseMetaPage";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Additional information related to api keys response.
*/
export class APIKeysResponseMeta {
  /**
   * Max allowed number of API keys.
  */
  "maxAllowed"?: number;
  /**
   * Additional information related to the API keys response.
  */
  "page"?: APIKeysResponseMetaPage;

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
    "maxAllowed": {
      "baseName": "max_allowed",
      "type": "number",
      "format": "int64",
    },
    "page": {
      "baseName": "page",
      "type": "APIKeysResponseMetaPage",
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




    return APIKeysResponseMeta.attributeTypeMap;

  }

  public constructor() {











  }
}









