/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAILLMEvaluationsIntegrationAccountAuthenticationUpdate } from "./OpenAILLMEvaluationsIntegrationAccountAuthenticationUpdate";
import { OpenAILLMEvaluationsIntegrationAccountSettingsUpdate } from "./OpenAILLMEvaluationsIntegrationAccountSettingsUpdate";
import { OpenAILLMEvaluationsIntegrationDataflowsRequest } from "./OpenAILLMEvaluationsIntegrationDataflowsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to update an OpenAI LLM Evaluations integration account. Every field is optional. Only the provided fields are changed. When `dataflows` is provided, only the dataflow IDs in the request are modified. Dataflows omitted from the map keep their current configuration.
 */
export class OpenAILLMEvaluationsIntegrationAccountUpdateAttributes {
  /**
   * Authentication for updating the OpenAI LLM Evaluations integration account. Exactly one method is set.
   */
  "authentication"?: OpenAILLMEvaluationsIntegrationAccountAuthenticationUpdate;
  /**
   * Data Datadog collects from OpenAI LLM Evaluations, keyed by dataflow ID. Each dataflow turns on a distinct type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values.
   */
  "dataflows"?: OpenAILLMEvaluationsIntegrationDataflowsRequest;
  /**
   * Human-readable name of the OpenAI LLM Evaluations integration account.
   */
  "name"?: string;
  /**
   * Settings for updating the OpenAI LLM Evaluations integration account. Only the fields provided are changed.
   */
  "settings"?: OpenAILLMEvaluationsIntegrationAccountSettingsUpdate;

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
      type: "OpenAILLMEvaluationsIntegrationAccountAuthenticationUpdate",
    },
    dataflows: {
      baseName: "dataflows",
      type: "OpenAILLMEvaluationsIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    settings: {
      baseName: "settings",
      type: "OpenAILLMEvaluationsIntegrationAccountSettingsUpdate",
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
    return OpenAILLMEvaluationsIntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
