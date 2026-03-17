import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebIntegrationAccountCreateRequestData } from "./WebIntegrationAccountCreateRequestData";

/**
 * Payload for creating a web integration account.
 */
export class WebIntegrationAccountCreateRequest {
  /**
   * Data object for creating a web integration account.
   */
  "data": WebIntegrationAccountCreateRequestData;
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
      type: "WebIntegrationAccountCreateRequestData",
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
    return WebIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
