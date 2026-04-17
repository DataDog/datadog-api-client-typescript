/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FlagSuggestionEventDataType } from "./FlagSuggestionEventDataType";
import { ReviewFlagSuggestionAttributes } from "./ReviewFlagSuggestionAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for reviewing a flag suggestion.
 */
export class ReviewFlagSuggestionData {
  /**
   * Attributes for reviewing a flag suggestion.
   */
  "attributes"?: ReviewFlagSuggestionAttributes;
  /**
   * Flag suggestion events resource type.
   */
  "type": FlagSuggestionEventDataType;

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
      type: "ReviewFlagSuggestionAttributes",
    },
    type: {
      baseName: "type",
      type: "FlagSuggestionEventDataType",
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
    return ReviewFlagSuggestionData.attributeTypeMap;
  }

  public constructor() {}
}
