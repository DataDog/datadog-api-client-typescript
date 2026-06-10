import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipFeedbackResultData } from "./OwnershipFeedbackResultData";

/**
 * The response returned after applying ownership feedback to an inference.
 */
export class OwnershipFeedbackResponse {
  /**
   * The data wrapper for an ownership feedback result response.
   */
  "data": OwnershipFeedbackResultData;
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
      type: "OwnershipFeedbackResultData",
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
    return OwnershipFeedbackResponse.attributeTypeMap;
  }

  public constructor() {}
}
