import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountUpdateData } from "./IntegrationAccountUpdateData";

/**
 * Request payload to update an integration account as a partial merge.
 */
export class IntegrationAccountUpdateRequest {
  /**
   * Data envelope for updating an integration account.
   */
  "data": IntegrationAccountUpdateData;
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
      type: "IntegrationAccountUpdateData",
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
    return IntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
