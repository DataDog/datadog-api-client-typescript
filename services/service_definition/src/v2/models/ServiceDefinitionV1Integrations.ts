import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Third party integrations that Datadog supports.
 */
export class ServiceDefinitionV1Integrations {
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
    return ServiceDefinitionV1Integrations.attributeTypeMap;
  }

  public constructor() {}
}
