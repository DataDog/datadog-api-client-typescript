/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsCustomEvalConfigType } from "./LLMObsCustomEvalConfigType";
import { LLMObsCustomEvalConfigUpdateAttributes } from "./LLMObsCustomEvalConfigUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for creating or updating a custom LLM Observability evaluator configuration.
 */
export class LLMObsCustomEvalConfigUpdateData {
  /**
   * Attributes for creating or updating a custom LLM Observability evaluator configuration.
   */
  "attributes": LLMObsCustomEvalConfigUpdateAttributes;
  /**
   * Name of the evaluator. If provided, must match the eval_name path parameter.
   */
  "id"?: string;
  /**
   * Type of the custom LLM Observability evaluator configuration resource.
   */
  "type": LLMObsCustomEvalConfigType;

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
      type: "LLMObsCustomEvalConfigUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LLMObsCustomEvalConfigType",
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
    return LLMObsCustomEvalConfigUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
