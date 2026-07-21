/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsCreatePromptVersionDataAttributes } from "./LLMObsCreatePromptVersionDataAttributes";
import { LLMObsPromptVersionType } from "./LLMObsPromptVersionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for creating an LLM Observability prompt version.
 */
export class LLMObsCreatePromptVersionData {
  /**
   * Attributes for creating a new version of an LLM Observability prompt. `template` is required; all other attributes are optional.
   */
  "attributes": LLMObsCreatePromptVersionDataAttributes;
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
      type: "LLMObsCreatePromptVersionDataAttributes",
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
    return LLMObsCreatePromptVersionData.attributeTypeMap;
  }

  public constructor() {}
}
