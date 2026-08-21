import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsConfigUpsertRequestData } from "./LLMObsPatternsConfigUpsertRequestData";

/**
 * Request to create or update an Agent Observability patterns configuration.
 */
export class LLMObsPatternsConfigUpsertRequest {
  /**
   * Data object for creating or updating an Agent Observability patterns configuration.
   */
  "data": LLMObsPatternsConfigUpsertRequestData;
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
    data: {
      baseName: "data",
      type: "LLMObsPatternsConfigUpsertRequestData",
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
    return LLMObsPatternsConfigUpsertRequest.attributeTypeMap;
  }

  public constructor() {}
}
