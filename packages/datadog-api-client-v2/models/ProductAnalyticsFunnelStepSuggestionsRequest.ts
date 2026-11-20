/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsFunnelStepSuggestionsRequestData } from "./ProductAnalyticsFunnelStepSuggestionsRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request to get suggested next steps for a funnel.
 */
export class ProductAnalyticsFunnelStepSuggestionsRequest {
  /**
   * Data of a step suggestions request.
   */
  "data": ProductAnalyticsFunnelStepSuggestionsRequestData;

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
      type: "ProductAnalyticsFunnelStepSuggestionsRequestData",
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
    return ProductAnalyticsFunnelStepSuggestionsRequest.attributeTypeMap;
  }

  public constructor() {}
}
