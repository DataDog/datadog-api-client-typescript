/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SearchSLOResponseData } from "./SearchSLOResponseData";
import { SearchSLOResponseLinks } from "./SearchSLOResponseLinks";
import { SearchSLOResponseMeta } from "./SearchSLOResponseMeta";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A search SLO response containing results from the search query.
*/
export class SearchSLOResponse {
  /**
   * Data from search SLO response.
  */
  "data"?: SearchSLOResponseData;
  /**
   * Pagination links.
  */
  "links"?: SearchSLOResponseLinks;
  /**
   * Searches metadata returned by the API.
  */
  "meta"?: SearchSLOResponseMeta;

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
      "type": "SearchSLOResponseData",
    },
    "links": {
      "baseName": "links",
      "type": "SearchSLOResponseLinks",
    },
    "meta": {
      "baseName": "meta",
      "type": "SearchSLOResponseMeta",
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




    return SearchSLOResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









