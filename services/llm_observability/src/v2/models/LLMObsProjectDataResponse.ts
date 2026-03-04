import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsProjectDataAttributesResponse } from "./LLMObsProjectDataAttributesResponse";
import { LLMObsProjectType } from "./LLMObsProjectType";

/**
 * Data object for an LLM Observability project.
 */
export class LLMObsProjectDataResponse {
  /**
   * Attributes of an LLM Observability project.
   */
  "attributes": LLMObsProjectDataAttributesResponse;
  /**
   * Unique identifier of the project.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability project.
   */
  "type": LLMObsProjectType;
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
      type: "LLMObsProjectDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsProjectType",
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
    return LLMObsProjectDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
