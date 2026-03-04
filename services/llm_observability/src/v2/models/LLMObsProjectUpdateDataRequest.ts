import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsProjectType } from "./LLMObsProjectType";
import { LLMObsProjectUpdateDataAttributesRequest } from "./LLMObsProjectUpdateDataAttributesRequest";

/**
 * Data object for updating an LLM Observability project.
 */
export class LLMObsProjectUpdateDataRequest {
  /**
   * Attributes for updating an LLM Observability project.
   */
  "attributes": LLMObsProjectUpdateDataAttributesRequest;
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
      type: "LLMObsProjectUpdateDataAttributesRequest",
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
    return LLMObsProjectUpdateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
