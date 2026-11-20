/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsCoreUserJourney } from "./ProductAnalyticsCoreUserJourney";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * A feature detected in the application, with the journeys users take to use it.
 */
export class ProductAnalyticsFunnelSuggestionsFeature {
  /**
   * The suggested journey that users follow to use the feature. Contains one journey.
   */
  "coreUserJourneys"?: Array<ProductAnalyticsCoreUserJourney>;
  /**
   * Description of the feature.
   */
  "description"?: string;
  /**
   * ID of the feature.
   */
  "id"?: string;
  /**
   * Name of the feature.
   */
  "name"?: string;
  /**
   * Relevance score of the feature. Higher is more relevant.
   */
  "score"?: Int64;
  /**
   * Number of sessions that used the feature.
   */
  "support"?: Int64;

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
    coreUserJourneys: {
      baseName: "core_user_journeys",
      type: "Array<ProductAnalyticsCoreUserJourney>",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    score: {
      baseName: "score",
      type: "number",
      format: "int64",
    },
    support: {
      baseName: "support",
      type: "number",
      format: "int64",
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
    return ProductAnalyticsFunnelSuggestionsFeature.attributeTypeMap;
  }

  public constructor() {}
}
