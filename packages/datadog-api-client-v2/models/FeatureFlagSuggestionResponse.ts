/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FeatureFlagSuggestion } from "./FeatureFlagSuggestion";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a feature flag change suggestion.
 */
export class FeatureFlagSuggestionResponse {
  /**
   * A proposed feature flag change and its approval lifecycle.
   */
  "data": FeatureFlagSuggestion;

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
      type: "FeatureFlagSuggestion",
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
    return FeatureFlagSuggestionResponse.attributeTypeMap;
  }

  public constructor() {}
}
