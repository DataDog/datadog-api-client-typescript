/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RecommendationsFilterRequestDataAttributes } from "./RecommendationsFilterRequestDataAttributes";
import { RecommendationsFilterRequestDataType } from "./RecommendationsFilterRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API resource containing the cost recommendations filter. This legacy search contract
 * uses the resource ID for the filter expression rather than as a persistent resource identifier.
 */
export class RecommendationsFilterRequestData {
  /**
   * Attributes used to filter and sort cost recommendations.
   */
  "attributes"?: RecommendationsFilterRequestDataAttributes;
  /**
   * Filter expression applied to the recommendations when `attributes.filter` is omitted.
   * When supplied, `attributes.filter` overrides this value, including when empty. If the
   * resulting filter is empty, it defaults to `*`. Scope, view, and pagination still apply.
   */
  "id"?: string;
  /**
   * Legacy JSON:API resource type required by the cost recommendations search decoder.
   */
  "type": RecommendationsFilterRequestDataType;

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
      type: "RecommendationsFilterRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RecommendationsFilterRequestDataType",
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
    return RecommendationsFilterRequestData.attributeTypeMap;
  }

  public constructor() {}
}
