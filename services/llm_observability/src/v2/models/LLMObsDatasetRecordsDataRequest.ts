import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetRecordsDataAttributesRequest } from "./LLMObsDatasetRecordsDataAttributesRequest";
import { LLMObsRecordType } from "./LLMObsRecordType";

/**
 * Data object for appending records to an LLM Observability dataset.
 */
export class LLMObsDatasetRecordsDataRequest {
  /**
   * Attributes for appending records to an LLM Observability dataset.
   */
  "attributes": LLMObsDatasetRecordsDataAttributesRequest;
  /**
   * Resource type of LLM Observability dataset records.
   */
  "type": LLMObsRecordType;
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
      type: "LLMObsDatasetRecordsDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsRecordType",
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
    return LLMObsDatasetRecordsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
