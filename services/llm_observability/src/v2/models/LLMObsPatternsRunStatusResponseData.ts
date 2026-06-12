import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsRunStatusResponseAttributes } from "./LLMObsPatternsRunStatusResponseAttributes";
import { LLMObsPatternsRunStatusType } from "./LLMObsPatternsRunStatusType";

/**
 * Data object of an LLM Observability patterns run status response.
 */
export class LLMObsPatternsRunStatusResponseData {
  /**
   * Attributes of an LLM Observability patterns run status.
   */
  "attributes": LLMObsPatternsRunStatusResponseAttributes;
  /**
   * The ID of the patterns run.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability patterns run status.
   */
  "type": LLMObsPatternsRunStatusType;
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
      type: "LLMObsPatternsRunStatusResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPatternsRunStatusType",
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
    return LLMObsPatternsRunStatusResponseData.attributeTypeMap;
  }

  public constructor() {}
}
