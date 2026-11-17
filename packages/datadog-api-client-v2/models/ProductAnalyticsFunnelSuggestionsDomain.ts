/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsFunnelSuggestionsFeature } from "./ProductAnalyticsFunnelSuggestionsFeature";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A feature area of an application, such as checkout or settings.
 */
export class ProductAnalyticsFunnelSuggestionsDomain {
  /**
   * Features in this area.
   */
  "features"?: Array<ProductAnalyticsFunnelSuggestionsFeature>;
  /**
   * Name of the feature area.
   */
  "name"?: string;

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
    features: {
      baseName: "features",
      type: "Array<ProductAnalyticsFunnelSuggestionsFeature>",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return ProductAnalyticsFunnelSuggestionsDomain.attributeTypeMap;
  }

  public constructor() {}
}
