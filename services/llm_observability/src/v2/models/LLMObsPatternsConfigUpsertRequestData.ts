import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsConfigType } from "./LLMObsPatternsConfigType";
import { LLMObsPatternsConfigUpsertRequestAttributes } from "./LLMObsPatternsConfigUpsertRequestAttributes";

/**
 * Data object for creating or updating an LLM Observability patterns configuration.
 */
export class LLMObsPatternsConfigUpsertRequestData {
  /**
   * Attributes for creating or updating an LLM Observability patterns configuration.
   */
  "attributes": LLMObsPatternsConfigUpsertRequestAttributes;
  /**
   * Resource type of an LLM Observability patterns configuration.
   */
  "type": LLMObsPatternsConfigType;
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
      type: "LLMObsPatternsConfigUpsertRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPatternsConfigType",
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
    return LLMObsPatternsConfigUpsertRequestData.attributeTypeMap;
  }

  public constructor() {}
}
