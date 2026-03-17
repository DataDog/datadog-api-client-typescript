import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebIntegrationAccountUpdateRequestData } from "./WebIntegrationAccountUpdateRequestData";

/**
 * Payload for updating a web integration account.
 */
export class WebIntegrationAccountUpdateRequest {
  /**
   * Data object for updating a web integration account.
   */
  "data": WebIntegrationAccountUpdateRequestData;
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
      type: "WebIntegrationAccountUpdateRequestData",
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
    return WebIntegrationAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
