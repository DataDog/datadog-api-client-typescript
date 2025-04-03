import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An Opsgenie integration schema.
 */
export class EntityV3DatadogIntegrationOpsgenie {
  /**
   * The region for the Opsgenie integration.
   */
  "region"?: string;
  /**
   * The service URL for the Opsgenie integration.
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
    region: {
      baseName: "region",
      type: "string",
    },
    serviceUrl: {
      baseName: "serviceURL",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3DatadogIntegrationOpsgenie.attributeTypeMap;
  }

  public constructor() {}
}
