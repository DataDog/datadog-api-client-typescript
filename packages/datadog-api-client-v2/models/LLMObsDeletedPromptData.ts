/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsDeletedPromptDataAttributes } from "./LLMObsDeletedPromptDataAttributes";
import { LLMObsPromptType } from "./LLMObsPromptType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object confirming that an LLM Observability prompt was deleted.
 */
export class LLMObsDeletedPromptData {
  /**
   * Attributes confirming that an LLM Observability prompt was deleted.
   */
  "attributes": LLMObsDeletedPromptDataAttributes;
  /**
   * Unique identifier of the deleted prompt.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability prompt.
   */
  "type": LLMObsPromptType;

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
      type: "LLMObsDeletedPromptDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPromptType",
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
    return LLMObsDeletedPromptData.attributeTypeMap;
  }

  public constructor() {}
}
