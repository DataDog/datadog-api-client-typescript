import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceDefinitionV2Dot1OpsgenieRegion } from "./ServiceDefinitionV2Dot1OpsgenieRegion";

/**
 * Opsgenie integration for the service.
 */
export class ServiceDefinitionV2Dot1Opsgenie {
  /**
   * Opsgenie instance region.
   */
  "region"?: ServiceDefinitionV2Dot1OpsgenieRegion;
  /**
   * Opsgenie service url.
   */
  "serviceUrl": string;
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
    region: {
      baseName: "region",
      type: "ServiceDefinitionV2Dot1OpsgenieRegion",
    },
    serviceUrl: {
      baseName: "service-url",
      type: "string",
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
    return ServiceDefinitionV2Dot1Opsgenie.attributeTypeMap;
  }

  public constructor() {}
}
