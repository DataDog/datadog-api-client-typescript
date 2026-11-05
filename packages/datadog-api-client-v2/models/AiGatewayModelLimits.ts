/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Token limits reported by the enrichment source.
 */
export class AiGatewayModelLimits {
  /**
   * Total model context window in tokens.
   */
  "contextWindowTokens"?: Int64;
  /**
   * Maximum input tokens when reported separately.
   */
  "maxInputTokens"?: Int64;
  /**
   * Maximum output tokens.
   */
  "maxOutputTokens"?: Int64;

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
    contextWindowTokens: {
      baseName: "context_window_tokens",
      type: "number",
      format: "int64",
    },
    maxInputTokens: {
      baseName: "max_input_tokens",
      type: "number",
      format: "int64",
    },
    maxOutputTokens: {
      baseName: "max_output_tokens",
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
    return AiGatewayModelLimits.attributeTypeMap;
  }

  public constructor() {}
}
