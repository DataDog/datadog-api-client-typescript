import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatGPTEnterpriseIntegrationAccountUpdateAttributes } from "./ChatGPTEnterpriseIntegrationAccountUpdateAttributes";
import { IntegrationAccountType } from "./IntegrationAccountType";

/**
 * Data envelope for updating a ChatGPT Enterprise integration account.
 */
export class ChatGPTEnterpriseIntegrationAccountUpdateData {
  /**
   * Writable attributes used to update a ChatGPT Enterprise integration account. Every field is optional; only the fields provided are changed. When `dataflows` is provided, only the dataflow ids included in the request are modified; dataflows omitted from the map keep their current configuration.
   */
  "attributes": ChatGPTEnterpriseIntegrationAccountUpdateAttributes;
  /**
   * Unique identifier of the ChatGPT Enterprise integration account to update.
   */
  "id": string;
  /**
   * The type of the integration account resource. Always `integration-account`.
   */
  "type": IntegrationAccountType;
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
      type: "ChatGPTEnterpriseIntegrationAccountUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IntegrationAccountType",
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
    return ChatGPTEnterpriseIntegrationAccountUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
