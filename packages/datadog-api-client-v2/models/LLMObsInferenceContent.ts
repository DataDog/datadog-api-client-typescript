/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsInferenceContentValue } from "./LLMObsInferenceContentValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A structured content block within a message.
 */
export class LLMObsInferenceContent {
  /**
   * The content block type.
   */
  "type": string;
  /**
   * The typed value of a message content block.
   */
  "value": LLMObsInferenceContentValue;

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
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "LLMObsInferenceContentValue",
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
    return LLMObsInferenceContent.attributeTypeMap;
  }

  public constructor() {}
}
