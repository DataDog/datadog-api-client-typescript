/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChatGPTEnterpriseIntegrationAccountAuthenticationUpdate } from "./ChatGPTEnterpriseIntegrationAccountAuthenticationUpdate";
import { ChatGPTEnterpriseIntegrationAccountSettingsUpdate } from "./ChatGPTEnterpriseIntegrationAccountSettingsUpdate";
import { ChatGPTEnterpriseIntegrationDataflowsRequest } from "./ChatGPTEnterpriseIntegrationDataflowsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to update a ChatGPT Enterprise integration account. Every field is optional; only the fields provided are changed. When `dataflows` is provided, only the dataflow ids included in the request are modified; dataflows omitted from the map keep their current configuration.
 */
export class ChatGPTEnterpriseIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the ChatGPT Enterprise integration account. Exactly one method is set.
   */
  "authentication"?: ChatGPTEnterpriseIntegrationAccountAuthenticationUpdate;
  /**
   * Data Datadog collects from ChatGPT Enterprise, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to start or stop it. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Every dataflow requires a ChatGPT Enterprise workspace with access to the OpenAI Costs API; a dataflow enabled without it is stored but collects no data.
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
