import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountCreateData } from "./IntegrationAccountCreateData";

/**
 * Request payload to create an integration account.
 */
export class IntegrationAccountRequest {
  /**
   * Data envelope for creating an integration account.
   */
  "data": IntegrationAccountCreateData;
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
      type: "IntegrationAccountCreateData",
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
    return IntegrationAccountRequest.attributeTypeMap;
  }

  public constructor() {}
}
