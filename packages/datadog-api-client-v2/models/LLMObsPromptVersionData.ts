/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsPromptVersionDataAttributes } from "./LLMObsPromptVersionDataAttributes";
import { LLMObsPromptVersionType } from "./LLMObsPromptVersionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for a specific version of an LLM Observability prompt.
 */
export class LLMObsPromptVersionData {
  /**
   * Attributes of a specific version of an LLM Observability prompt.
   */
  "attributes": LLMObsPromptVersionDataAttributes;
  /**
   * Unique identifier of the prompt version.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability prompt version.
   */
  "type": LLMObsPromptVersionType;

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
      type: "LLMObsPromptVersionDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPromptVersionType",
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
    return LLMObsPromptVersionData.attributeTypeMap;
  }

  public constructor() {}
}
