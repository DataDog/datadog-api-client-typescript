import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { ChatGPTEnterpriseIntegrationAccountAuthenticationUpdate } from "./ChatGPTEnterpriseIntegrationAccountAuthenticationUpdate";
import { ChatGPTEnterpriseIntegrationAccountSettingsUpdate } from "./ChatGPTEnterpriseIntegrationAccountSettingsUpdate";
import { ChatGPTEnterpriseIntegrationDataflowsRequest } from "./ChatGPTEnterpriseIntegrationDataflowsRequest";

/**
 * Writable attributes used to update a ChatGPT Enterprise integration account. Every field is optional. Only the provided fields are changed. When `dataflows` is provided, only the dataflow IDs in the request are modified. Dataflows omitted from the map keep their current configuration.
 */
export class ChatGPTEnterpriseIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the ChatGPT Enterprise integration account. Exactly one method is set.
   */
  "authentication"?: ChatGPTEnterpriseIntegrationAccountAuthenticationUpdate;
  /**
   * Data Datadog collects from ChatGPT Enterprise, keyed by dataflow ID. Each dataflow turns on a distinct type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values. Every dataflow requires a ChatGPT Enterprise workspace with access to the OpenAI Costs API. If you enable a dataflow without this access, Datadog stores the setting but collects no data.
   */
  "dataflows"?: ChatGPTEnterpriseIntegrationDataflowsRequest;
  /**
   * Human-readable name of the ChatGPT Enterprise integration account.
   */
  "name"?: string;
  /**
   * Settings for updating the ChatGPT Enterprise integration account. Only the fields provided are changed.
   */
  "settings"?: ChatGPTEnterpriseIntegrationAccountSettingsUpdate;
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
    authentication: {
      baseName: "authentication",
      type: "ChatGPTEnterpriseIntegrationAccountAuthenticationUpdate",
    },
    dataflows: {
      baseName: "dataflows",
      type: "ChatGPTEnterpriseIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "ChatGPTEnterpriseIntegrationAccountSettingsUpdate",
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
    return ChatGPTEnterpriseIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
