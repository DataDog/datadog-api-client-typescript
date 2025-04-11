import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceDefinitionV2Opsgenie } from "./ServiceDefinitionV2Opsgenie";

/**
 * Third party integrations that Datadog supports.
 */
export class ServiceDefinitionV2Integrations {
  /**
   * Opsgenie integration for the service.
   */
  "opsgenie"?: ServiceDefinitionV2Opsgenie;
  /**
   * PagerDuty service URL for the service.
   */
  "pagerduty"?: string;
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
      type: "ServiceDefinitionV2Opsgenie",
    },
    pagerduty: {
      baseName: "pagerduty",
      type: "string",
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
    return ServiceDefinitionV2Integrations.attributeTypeMap;
  }

  public constructor() {}
}
