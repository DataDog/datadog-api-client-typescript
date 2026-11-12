/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChatGPTEnterpriseIntegrationAccountAuthenticationResponse } from "./ChatGPTEnterpriseIntegrationAccountAuthenticationResponse";
import { ChatGPTEnterpriseIntegrationAccountSettingsResponse } from "./ChatGPTEnterpriseIntegrationAccountSettingsResponse";
import { ChatGPTEnterpriseIntegrationDataflowsResponse } from "./ChatGPTEnterpriseIntegrationDataflowsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a ChatGPT Enterprise integration account returned in responses.
 */
export class ChatGPTEnterpriseIntegrationAccountResponseAttributes {
  /**
   * Authentication configured on the ChatGPT Enterprise integration account.
   */
  "authentication"?: ChatGPTEnterpriseIntegrationAccountAuthenticationResponse;
  /**
   * Data Datadog collects from ChatGPT Enterprise, keyed by dataflow id.
   */
  "dataflows"?: ChatGPTEnterpriseIntegrationDataflowsResponse;
  /**
   * Human-readable name of the ChatGPT Enterprise integration account.
   */
  "name": string;
  /**
   * Settings configured on the ChatGPT Enterprise integration account.
   */
  "settings": ChatGPTEnterpriseIntegrationAccountSettingsResponse;

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
      type: "ChatGPTEnterpriseIntegrationAccountAuthenticationResponse",
    },
    dataflows: {
      baseName: "dataflows",
      type: "ChatGPTEnterpriseIntegrationDataflowsResponse",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "ChatGPTEnterpriseIntegrationAccountSettingsResponse",
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
    return ChatGPTEnterpriseIntegrationAccountResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
