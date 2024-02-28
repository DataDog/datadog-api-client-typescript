/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ServiceDefinitionV2Dot1Opsgenie } from "./ServiceDefinitionV2Dot1Opsgenie";
import { ServiceDefinitionV2Dot1Pagerduty } from "./ServiceDefinitionV2Dot1Pagerduty";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Third party integrations that Datadog supports.
 */
export class ServiceDefinitionV2Dot1Integrations {
  /**
   * Opsgenie integration for the service.
   */
  "opsgenie"?: ServiceDefinitionV2Dot1Opsgenie;
  /**
   * PagerDuty integration for the service.
   */
  "pagerduty"?: ServiceDefinitionV2Dot1Pagerduty;

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
    opsgenie: {
      baseName: "opsgenie",
      type: "ServiceDefinitionV2Dot1Opsgenie",
    },
    pagerduty: {
      baseName: "pagerduty",
      type: "ServiceDefinitionV2Dot1Pagerduty",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ServiceDefinitionV2Dot1Integrations.attributeTypeMap;
  }

  public constructor() {}
}
