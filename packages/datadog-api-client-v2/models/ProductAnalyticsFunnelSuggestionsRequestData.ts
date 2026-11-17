/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsFunnelSuggestionsRequestAttributes } from "./ProductAnalyticsFunnelSuggestionsRequestAttributes";
import { ProductAnalyticsFunnelSuggestionsRequestType } from "./ProductAnalyticsFunnelSuggestionsRequestType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of a feature suggestions request.
 */
export class ProductAnalyticsFunnelSuggestionsRequestData {
  /**
   * Attributes of a feature suggestions request.
   */
  "attributes"?: ProductAnalyticsFunnelSuggestionsRequestAttributes;
  /**
   * Type of a feature suggestions request.
   */
  "type": ProductAnalyticsFunnelSuggestionsRequestType;

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
      type: "ProductAnalyticsFunnelSuggestionsRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsFunnelSuggestionsRequestType",
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
    return ProductAnalyticsFunnelSuggestionsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
