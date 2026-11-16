/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApproveFlagSuggestionAttributes } from "./ApproveFlagSuggestionAttributes";
import { ReviewFlagSuggestionDataType } from "./ReviewFlagSuggestionDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The approval event to create.
 */
export class ApproveFlagSuggestionData {
  /**
   * Approval options for the suggestion.
   */
  "attributes": ApproveFlagSuggestionAttributes;
  /**
   * The resource type for reviewing feature flag suggestions.
   */
  "type": ReviewFlagSuggestionDataType;

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
      type: "ApproveFlagSuggestionAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReviewFlagSuggestionDataType",
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
    return ApproveFlagSuggestionData.attributeTypeMap;
  }

  public constructor() {}
}
