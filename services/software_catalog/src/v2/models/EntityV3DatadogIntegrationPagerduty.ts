import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A PagerDuty integration schema.
 */
export class EntityV3DatadogIntegrationPagerduty {
  /**
   * The service URL for the PagerDuty integration.
   */
  "serviceUrl": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    serviceUrl: {
      baseName: "serviceURL",
      type: "string",
      required: true,
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3DatadogIntegrationPagerduty.attributeTypeMap;
  }

  public constructor() {}
}
