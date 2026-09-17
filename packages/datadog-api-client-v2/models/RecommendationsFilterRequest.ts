/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RecommendationsFilterRequestData } from "./RecommendationsFilterRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API request body for filtering cost recommendations.
 */
export class RecommendationsFilterRequest {
  /**
   * JSON:API resource containing the cost recommendations filter. This legacy search contract
   * uses the resource ID for the filter expression rather than as a persistent resource identifier.
   */
  "data": RecommendationsFilterRequestData;

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
      type: "RecommendationsFilterRequestData",
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
    return RecommendationsFilterRequest.attributeTypeMap;
  }

  public constructor() {}
}
