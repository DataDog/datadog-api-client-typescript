/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CostRecommendationData } from "./CostRecommendationData";
import { RecommendationsPageMeta } from "./RecommendationsPageMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A page of cost recommendations with pagination metadata.
 */
export class CostRecommendationArray {
  /**
   * The list of cost recommendations on this page.
   */
  "data": Array<CostRecommendationData>;
  /**
   * Top-level JSON:API meta object for paginated cost recommendation responses.
   */
  "meta"?: RecommendationsPageMeta;

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
    data: {
      baseName: "data",
      type: "Array<CostRecommendationData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RecommendationsPageMeta",
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
    return CostRecommendationArray.attributeTypeMap;
  }

  public constructor() {}
}
