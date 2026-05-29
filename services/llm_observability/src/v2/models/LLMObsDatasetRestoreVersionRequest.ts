import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetRestoreVersionDataRequest } from "./LLMObsDatasetRestoreVersionDataRequest";

/**
 * Request to restore an LLM Observability dataset to a previous version.
 */
export class LLMObsDatasetRestoreVersionRequest {
  /**
   * Data object for restoring an LLM Observability dataset to a previous version.
   */
  "data": LLMObsDatasetRestoreVersionDataRequest;
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
      type: "LLMObsDatasetRestoreVersionDataRequest",
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
    return LLMObsDatasetRestoreVersionRequest.attributeTypeMap;
  }

  public constructor() {}
}
