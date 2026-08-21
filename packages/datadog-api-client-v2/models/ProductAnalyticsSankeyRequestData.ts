/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsSankeyRequestAttributes } from "./ProductAnalyticsSankeyRequestAttributes";
import { ProductAnalyticsSankeyRequestType } from "./ProductAnalyticsSankeyRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The single JSON:API resource carrying a Sankey query. Its attributes hold the time window to
 * query, the search that selects the sessions, and the definition of the diagram to build.
 */
export class ProductAnalyticsSankeyRequestData {
  /**
   * Attributes of a Sankey request.
   */
  "attributes": ProductAnalyticsSankeyRequestAttributes;
  /**
   * The resource type identifier for a Sankey request.
   */
  "type": ProductAnalyticsSankeyRequestType;

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
    attributes: {
      baseName: "attributes",
      type: "ProductAnalyticsSankeyRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsSankeyRequestType",
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
    return ProductAnalyticsSankeyRequestData.attributeTypeMap;
  }

  public constructor() {}
}
