/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAIUsageAndCostsIntegrationAccountAuthenticationRequest } from "./OpenAIUsageAndCostsIntegrationAccountAuthenticationRequest";
import { OpenAIUsageAndCostsIntegrationAccountSettingsRequest } from "./OpenAIUsageAndCostsIntegrationAccountSettingsRequest";
import { OpenAIUsageAndCostsIntegrationDataflowsRequest } from "./OpenAIUsageAndCostsIntegrationDataflowsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Writable attributes used to create an OpenAI Usage and Costs integration account.
 */
export class OpenAIUsageAndCostsIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the OpenAI Usage and Costs integration account. Set exactly one method.
   */
  "authentication": OpenAIUsageAndCostsIntegrationAccountAuthenticationRequest;
  /**
   * Data Datadog collects from OpenAI Usage and Costs, keyed by dataflow ID. Datadog always collects organization usage metrics. Each dataflow in this object adds another type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values.
   */
  "dataflows"?: OpenAIUsageAndCostsIntegrationDataflowsRequest;
  /**
   * Human-readable name of the OpenAI Usage and Costs integration account.
   */
  "name": string;
  /**
   * Settings for creating the OpenAI Usage and Costs integration account.
   */
  "settings": OpenAIUsageAndCostsIntegrationAccountSettingsRequest;

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
      type: "OpenAIUsageAndCostsIntegrationAccountAuthenticationRequest",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "OpenAIUsageAndCostsIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "OpenAIUsageAndCostsIntegrationAccountSettingsRequest",
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
    return OpenAIUsageAndCostsIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
