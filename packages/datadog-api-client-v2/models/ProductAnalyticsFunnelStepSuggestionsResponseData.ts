/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsFunnelStepSuggestionsResponseAttributes } from "./ProductAnalyticsFunnelStepSuggestionsResponseAttributes";
import { ProductAnalyticsFunnelStepSuggestionsResponseType } from "./ProductAnalyticsFunnelStepSuggestionsResponseType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data of a step suggestions response.
 */
export class ProductAnalyticsFunnelStepSuggestionsResponseData {
  /**
   * Attributes of a step suggestions response.
   */
  "attributes": ProductAnalyticsFunnelStepSuggestionsResponseAttributes;
  /**
   * ID of the response.
   */
  "id": string;
  /**
   * Type of a step suggestions response.
   */
  "type": ProductAnalyticsFunnelStepSuggestionsResponseType;

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
      type: "ProductAnalyticsFunnelStepSuggestionsResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsFunnelStepSuggestionsResponseType",
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
    return ProductAnalyticsFunnelStepSuggestionsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
