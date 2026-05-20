import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDataDeletionResponseAttributes } from "./LLMObsDataDeletionResponseAttributes";
import { LLMObsDataDeletionResponseType } from "./LLMObsDataDeletionResponseType";

/**
 * Data object for an LLM Observability data deletion response.
 */
export class LLMObsDataDeletionResponseData {
  /**
   * Attributes of a submitted LLM Observability data deletion request.
   */
  "attributes": LLMObsDataDeletionResponseAttributes;
  /**
   * Unique identifier of the deletion request.
   */
  "id": string;
  /**
   * Resource type for an LLM Observability data deletion response.
   */
  "type": LLMObsDataDeletionResponseType;
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
      type: "LLMObsDataDeletionResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsDataDeletionResponseType",
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
    return LLMObsDataDeletionResponseData.attributeTypeMap;
  }

  public constructor() {}
}
