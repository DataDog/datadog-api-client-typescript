import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsUpdatePromptVersionData } from "./LLMObsUpdatePromptVersionData";

/**
 * Request to update an LLM Observability prompt version's metadata or feature-flag environments.
 */
export class LLMObsUpdatePromptVersionRequest {
  /**
   * Data object for updating an LLM Observability prompt version.
   */
  "data": LLMObsUpdatePromptVersionData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "LLMObsUpdatePromptVersionData",
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
    return LLMObsUpdatePromptVersionRequest.attributeTypeMap;
  }

  public constructor() {}
}
