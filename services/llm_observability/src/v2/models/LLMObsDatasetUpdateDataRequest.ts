import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetType } from "./LLMObsDatasetType";
import { LLMObsDatasetUpdateDataAttributesRequest } from "./LLMObsDatasetUpdateDataAttributesRequest";

/**
 * Data object for updating an LLM Observability dataset.
 */
export class LLMObsDatasetUpdateDataRequest {
  /**
   * Attributes for updating an LLM Observability dataset.
   */
  "attributes": LLMObsDatasetUpdateDataAttributesRequest;
  /**
   * Resource type of an LLM Observability dataset.
   */
  "type": LLMObsDatasetType;
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
      type: "LLMObsDatasetUpdateDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsDatasetType",
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
    return LLMObsDatasetUpdateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
