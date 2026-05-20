import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDataDeletionRequestAttributes } from "./LLMObsDataDeletionRequestAttributes";
import { LLMObsDataDeletionRequestType } from "./LLMObsDataDeletionRequestType";

/**
 * Data object for an LLM Observability data deletion request.
 */
export class LLMObsDataDeletionRequestData {
  /**
   * Attributes for an LLM Observability data deletion request.
   */
  "attributes": LLMObsDataDeletionRequestAttributes;
  /**
   * Resource type for an LLM Observability data deletion request.
   */
  "type": LLMObsDataDeletionRequestType;
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
      type: "LLMObsDataDeletionRequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsDataDeletionRequestType",
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
    return LLMObsDataDeletionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
