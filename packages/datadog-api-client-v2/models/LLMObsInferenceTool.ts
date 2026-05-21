/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsInferenceFunction } from "./LLMObsInferenceFunction";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A tool definition available to the model during inference.
 */
export class LLMObsInferenceTool {
  /**
   * A function definition for a tool available to the model.
   */
  "_function": LLMObsInferenceFunction;
  /**
   * The type of tool.
   */
  "type": string;

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
    _function: {
      baseName: "function",
      type: "LLMObsInferenceFunction",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return LLMObsInferenceTool.attributeTypeMap;
  }

  public constructor() {}
}
