/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppPipelinesQueryFilter } from "./CIAppPipelinesQueryFilter";
import { CIAppQueryOptions } from "./CIAppQueryOptions";
import { CIAppQueryPageOptions } from "./CIAppQueryPageOptions";
import { CIAppSort } from "./CIAppSort";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The request for a pipelines search.
*/
export class CIAppPipelineEventsRequest {
  /**
   * The search and filter query settings.
  */
  "filter"?: CIAppPipelinesQueryFilter;
  /**
   * Global query options that are used during the query.
   * Only supply timezone or time offset, not both. Otherwise, the query fails.
  */
  "options"?: CIAppQueryOptions;
  /**
   * Paging attributes for listing events.
  */
  "page"?: CIAppQueryPageOptions;
  /**
   * Sort parameters when querying events.
  */
  "sort"?: CIAppSort;

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
    "filter": {
      "baseName": "filter",
      "type": "CIAppPipelinesQueryFilter",
    },
    "options": {
      "baseName": "options",
      "type": "CIAppQueryOptions",
    },
    "page": {
      "baseName": "page",
      "type": "CIAppQueryPageOptions",
    },
    "sort": {
      "baseName": "sort",
      "type": "CIAppSort",
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




    return CIAppPipelineEventsRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









