/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsSankeyResponseAttributes } from "./ProductAnalyticsSankeyResponseAttributes";
import { ProductAnalyticsSankeyResponseType } from "./ProductAnalyticsSankeyResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class ProductAnalyticsSankeyResponseData {
  "attributes"?: ProductAnalyticsSankeyResponseAttributes;
  "id"?: string;
  "type"?: ProductAnalyticsSankeyResponseType;

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
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsSankeyResponseType",
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
