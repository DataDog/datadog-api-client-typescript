import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetDraftStateDataAttributes } from "./LLMObsDatasetDraftStateDataAttributes";
import { LLMObsDatasetDraftStateType } from "./LLMObsDatasetDraftStateType";

/**
 * Data object for an LLM Observability dataset draft state.
 */
export class LLMObsDatasetDraftStateData {
  /**
   * Attributes of an LLM Observability dataset draft state.
   */
  "attributes": LLMObsDatasetDraftStateDataAttributes;
  /**
   * Unique identifier of the dataset draft state. Matches the dataset ID.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability dataset draft state.
   */
  "type": LLMObsDatasetDraftStateType;
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
      type: "LLMObsDatasetDraftStateDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsDatasetDraftStateType",
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
    return LLMObsDatasetDraftStateData.attributeTypeMap;
  }

  public constructor() {}
}
