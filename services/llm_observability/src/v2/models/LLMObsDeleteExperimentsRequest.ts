import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDeleteExperimentsDataRequest } from "./LLMObsDeleteExperimentsDataRequest";

/**
 * Request to delete one or more LLM Observability experiments.
 */
export class LLMObsDeleteExperimentsRequest {
  /**
   * Data object for deleting LLM Observability experiments.
   */
  "data": LLMObsDeleteExperimentsDataRequest;
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
      type: "LLMObsDeleteExperimentsDataRequest",
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
    return LLMObsDeleteExperimentsRequest.attributeTypeMap;
  }

  public constructor() {}
}
