/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAICodexIntegrationAccountAuthenticationRequest } from "./OpenAICodexIntegrationAccountAuthenticationRequest";
import { OpenAICodexIntegrationAccountSettingsRequest } from "./OpenAICodexIntegrationAccountSettingsRequest";
import { OpenAICodexIntegrationDataflowsRequest } from "./OpenAICodexIntegrationDataflowsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to create an OpenAI Codex integration account.
 */
export class OpenAICodexIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the OpenAI Codex integration account. Exactly one method is set.
   */
  "authentication": OpenAICodexIntegrationAccountAuthenticationRequest;
  /**
   * Data Datadog collects from OpenAI Codex, keyed by dataflow id. Daily Codex analytics metrics are always collected; each dataflow here adds a further kind of collection on top of that baseline, so set `enabled` to start or stop it. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Every dataflow requires an OpenAI enterprise subscription with Codex enabled; a dataflow enabled without it is stored but collects no data.
   */
  "dataflows"?: OpenAICodexIntegrationDataflowsRequest;
  /**
   * Human-readable name of the OpenAI Codex integration account.
   */
  "name": string;
  /**
   * Settings for creating the OpenAI Codex integration account.
   */
  "settings": OpenAICodexIntegrationAccountSettingsRequest;

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
      type: "OpenAICodexIntegrationAccountAuthenticationRequest",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "OpenAICodexIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "OpenAICodexIntegrationAccountSettingsRequest",
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
    return OpenAICodexIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
