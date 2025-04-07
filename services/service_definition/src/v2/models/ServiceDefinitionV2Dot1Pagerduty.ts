import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * PagerDuty integration for the service.
 */
export class ServiceDefinitionV2Dot1Pagerduty {
  /**
   * PagerDuty service url.
   */
  "serviceUrl"?: string;
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
    serviceUrl: {
      baseName: "service-url",
      type: "string",
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
    return ServiceDefinitionV2Dot1Pagerduty.attributeTypeMap;
  }

  public constructor() {}
}
