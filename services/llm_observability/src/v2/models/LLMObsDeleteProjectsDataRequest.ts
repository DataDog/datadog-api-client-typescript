import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDeleteProjectsDataAttributesRequest } from "./LLMObsDeleteProjectsDataAttributesRequest";
import { LLMObsProjectType } from "./LLMObsProjectType";

/**
 * Data object for deleting LLM Observability projects.
 */
export class LLMObsDeleteProjectsDataRequest {
  /**
   * Attributes for deleting LLM Observability projects.
   */
  "attributes": LLMObsDeleteProjectsDataAttributesRequest;
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
      type: "LLMObsDeleteProjectsDataAttributesRequest",
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
    return LLMObsDeleteProjectsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
