import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetRecordsUpdateDataAttributesRequest } from "./LLMObsDatasetRecordsUpdateDataAttributesRequest";
import { LLMObsRecordType } from "./LLMObsRecordType";

/**
 * Data object for updating records in an LLM Observability dataset.
 */
export class LLMObsDatasetRecordsUpdateDataRequest {
  /**
   * Attributes for updating records in an LLM Observability dataset.
   */
  "attributes": LLMObsDatasetRecordsUpdateDataAttributesRequest;
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
      type: "LLMObsDatasetRecordsUpdateDataAttributesRequest",
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
    return LLMObsDatasetRecordsUpdateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
