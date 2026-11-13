/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FeatureFlagSuggestionAttributes } from "./FeatureFlagSuggestionAttributes";
import { FeatureFlagSuggestionDataType } from "./FeatureFlagSuggestionDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A proposed feature flag change and its approval lifecycle.
 */
export class FeatureFlagSuggestion {
  /**
   * Attributes of a feature flag change suggestion.
   */
  "attributes": FeatureFlagSuggestionAttributes;
  /**
   * The unique identifier of the suggestion.
   */
  "id": string;
  /**
   * The resource type for feature flag suggestions.
   */
  "type": FeatureFlagSuggestionDataType;

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
      type: "FeatureFlagSuggestionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "FeatureFlagSuggestionDataType",
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
    return FeatureFlagSuggestion.attributeTypeMap;
  }

  public constructor() {}
}
