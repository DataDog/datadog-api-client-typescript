import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebIntegrationAccountAttributes } from "./WebIntegrationAccountAttributes";
import { WebIntegrationAccountType } from "./WebIntegrationAccountType";

/**
 * Data object for a web integration account response.
 */
export class WebIntegrationAccountResponseData {
  /**
   * Attributes for a web integration account.
   */
  "attributes": WebIntegrationAccountAttributes;
  /**
   * The unique identifier for the account.
   */
  "id": string;
  /**
   * The JSON:API type for web integration accounts.
   */
  "type": WebIntegrationAccountType;
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
      type: "WebIntegrationAccountAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WebIntegrationAccountType",
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
    return WebIntegrationAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
