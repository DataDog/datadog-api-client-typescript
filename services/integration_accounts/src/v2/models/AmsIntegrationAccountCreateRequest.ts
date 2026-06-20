import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AmsIntegrationAccountCreateRequestData } from "./AmsIntegrationAccountCreateRequestData";

/**
 * Payload for creating a web integration account.
 */
export class AmsIntegrationAccountCreateRequest {
  /**
   * Data object for creating a web integration account.
   */
  "data": AmsIntegrationAccountCreateRequestData;
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
      type: "AmsIntegrationAccountCreateRequestData",
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
    return AmsIntegrationAccountCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
