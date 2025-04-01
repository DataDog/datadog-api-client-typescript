/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppResponseLinks } from "./CIAppResponseLinks";
import { CIAppResponseMetadataWithPagination } from "./CIAppResponseMetadataWithPagination";
import { CIAppTestEvent } from "./CIAppTestEvent";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response object with all test events matching the request and pagination information.
*/
export class CIAppTestEventsResponse {
  /**
   * Array of events matching the request.
  */
  "data"?: Array<CIAppTestEvent>;
  /**
   * Links attributes.
  */
  "links"?: CIAppResponseLinks;
  /**
   * The metadata associated with a request.
  */
  "meta"?: CIAppResponseMetadataWithPagination;

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
    "data": {
      "baseName": "data",
      "type": "Array<CIAppTestEvent>",
    },
    "links": {
      "baseName": "links",
      "type": "CIAppResponseLinks",
    },
    "meta": {
      "baseName": "meta",
      "type": "CIAppResponseMetadataWithPagination",
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




    return CIAppTestEventsResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









