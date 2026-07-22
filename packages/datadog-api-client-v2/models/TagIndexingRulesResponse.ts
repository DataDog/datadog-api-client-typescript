/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricsListResponseLinks } from "./MetricsListResponseLinks";
import { TagIndexingRuleData } from "./TagIndexingRuleData";
import { TagIndexingRulesResponseMeta } from "./TagIndexingRulesResponseMeta";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Response containing a page of tag indexing rules.
*/
export class TagIndexingRulesResponse {
  /**
   * Array of tag indexing rule objects.
  */
  "data"?: Array<TagIndexingRuleData>;
  /**
   * Pagination links. Only present if pagination query parameters were provided.
  */
  "links"?: MetricsListResponseLinks;
  /**
   * Pagination metadata for a list of tag indexing rules.
  */
  "meta"?: TagIndexingRulesResponseMeta;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

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
      "type": "Array<TagIndexingRuleData>",
    },
    "links": {
      "baseName": "links",
      "type": "MetricsListResponseLinks",
    },
    "meta": {
      "baseName": "meta",
      "type": "TagIndexingRulesResponseMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return TagIndexingRulesResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









