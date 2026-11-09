import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateStatusPageEmailAccessPolicyRequestData } from "./CreateStatusPageEmailAccessPolicyRequestData";

/**
 * Request object for creating a status page email access policy.
 */
export class CreateStatusPageEmailAccessPolicyRequest {
  /**
   * The data object for creating a status page email access policy.
   */
  "data": CreateStatusPageEmailAccessPolicyRequestData;
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
      type: "CreateStatusPageEmailAccessPolicyRequestData",
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
    return CreateStatusPageEmailAccessPolicyRequest.attributeTypeMap;
  }

  public constructor() {}
}
