/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsSankeyRequestData } from "./ProductAnalyticsSankeyRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for a Sankey diagram query.
 */
export class ProductAnalyticsSankeyRequest {
  /**
   * The single JSON:API resource carrying a Sankey query. Its attributes hold the time window to
   * query, the search that selects the sessions, and the definition of the diagram to build.
   */
  "data": ProductAnalyticsSankeyRequestData;

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
      type: "ProductAnalyticsSankeyRequestData",
      required: true,
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
    return ProductAnalyticsSankeyRequest.attributeTypeMap;
  }

  public constructor() {}
}
