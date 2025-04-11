import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceDefinitionV2Dot2OpsgenieRegion } from "./ServiceDefinitionV2Dot2OpsgenieRegion";

/**
 * Opsgenie integration for the service.
 */
export class ServiceDefinitionV2Dot2Opsgenie {
  /**
   * Opsgenie instance region.
   */
  "region"?: ServiceDefinitionV2Dot2OpsgenieRegion;
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
      type: "ServiceDefinitionV2Dot2OpsgenieRegion",
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
    return ServiceDefinitionV2Dot2Opsgenie.attributeTypeMap;
  }

  public constructor() {}
}
