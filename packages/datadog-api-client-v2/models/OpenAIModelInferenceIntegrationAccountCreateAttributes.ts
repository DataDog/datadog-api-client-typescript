/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAIModelInferenceIntegrationAccountAuthenticationRequest } from "./OpenAIModelInferenceIntegrationAccountAuthenticationRequest";
import { OpenAIModelInferenceIntegrationAccountSettingsRequest } from "./OpenAIModelInferenceIntegrationAccountSettingsRequest";
import { OpenAIModelInferenceIntegrationDataflowsRequest } from "./OpenAIModelInferenceIntegrationDataflowsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to create an OpenAI Model Inference integration account.
 */
export class OpenAIModelInferenceIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the OpenAI Model Inference integration account. Set exactly one method.
   */
  "authentication": OpenAIModelInferenceIntegrationAccountAuthenticationRequest;
  /**
   * Data Datadog collects from OpenAI Model Inference, keyed by dataflow ID. Each dataflow turns on a distinct type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values.
   */
  "dataflows"?: OpenAIModelInferenceIntegrationDataflowsRequest;
  /**
   * Human-readable name of the OpenAI Model Inference integration account.
   */
  "name": string;
  /**
   * Settings for creating the OpenAI Model Inference integration account.
   */
  "settings": OpenAIModelInferenceIntegrationAccountSettingsRequest;

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
      type: "OpenAIModelInferenceIntegrationAccountAuthenticationRequest",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "OpenAIModelInferenceIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "OpenAIModelInferenceIntegrationAccountSettingsRequest",
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
    return OpenAIModelInferenceIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
