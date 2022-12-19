/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SearchServiceLevelObjective } from "./SearchServiceLevelObjective";
import { SearchSLOResponseDataAttributesFacets } from "./SearchSLOResponseDataAttributesFacets";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes
 */
export class SearchSLOResponseDataAttributes {
  /**
   * Facets
   */
  "facets"?: SearchSLOResponseDataAttributesFacets;
  /**
   * SLOs
   */
  "slos"?: Array<SearchServiceLevelObjective>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    facets: {
      baseName: "facets",
      type: "SearchSLOResponseDataAttributesFacets",
    },
    slos: {
      baseName: "slos",
      type: "Array<SearchServiceLevelObjective>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SearchSLOResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
