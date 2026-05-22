import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDatasetDraftStateUser } from "./LLMObsDatasetDraftStateUser";

/**
 * Attributes of an LLM Observability dataset draft state.
 */
export class LLMObsDatasetDraftStateDataAttributes {
  /**
   * Timestamp when the dataset draft session started.
   */
  "draftingSince": Date;
  /**
   * User information associated with a dataset draft state.
   */
  "user": LLMObsDatasetDraftStateUser;
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
    draftingSince: {
      baseName: "drafting_since",
      type: "Date",
      required: true,
      format: "date-time",
    },
    user: {
      baseName: "user",
      type: "LLMObsDatasetDraftStateUser",
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
    return LLMObsDatasetDraftStateDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
