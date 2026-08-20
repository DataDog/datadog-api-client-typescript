/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsSankeyResponseAttributes } from "./ProductAnalyticsSankeyResponseAttributes";
import { ProductAnalyticsSankeyResponseType } from "./ProductAnalyticsSankeyResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The single JSON:API resource holding a computed Sankey diagram. Its attributes contain the
 * nodes of every column and the links that carry sessions between them.
 */
export class ProductAnalyticsSankeyResponseData {
  /**
   * Attributes of a Sankey response, containing the nodes and the links between them.
   */
  "attributes": ProductAnalyticsSankeyResponseAttributes;
  /**
   * Unique identifier for this response data object.
   */
  "id": string;
  /**
   * The resource type identifier for a Sankey response.
   */
  "type": ProductAnalyticsSankeyResponseType;

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
      type: "ProductAnalyticsSankeyResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsSankeyResponseType",
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
    return ProductAnalyticsSankeyResponseData.attributeTypeMap;
  }

  public constructor() {}
}
