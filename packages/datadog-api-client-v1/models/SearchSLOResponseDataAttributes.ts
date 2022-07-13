/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SearchSLOResponseDataAttributesFacets } from "./SearchSLOResponseDataAttributesFacets";
import { ServiceLevelObjective } from "./ServiceLevelObjective";

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
  "slo"?: Array<ServiceLevelObjective>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    facets: {
      baseName: "facets",
      type: "SearchSLOResponseDataAttributesFacets",
    },
    slo: {
      baseName: "slo",
      type: "Array<ServiceLevelObjective>",
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
