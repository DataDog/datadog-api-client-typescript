import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration settings applied to resources from the specified Azure resource provider.
 */
export class ResourceProviderConfig {
  /**
   * Collect metrics for resources from this provider.
   */
  "metricsEnabled"?: boolean;
  /**
   * The provider namespace to apply this configuration to.
   */
  "namespace"?: string;
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
    metricsEnabled: {
      baseName: "metrics_enabled",
      type: "boolean",
    },
    namespace: {
      baseName: "namespace",
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
    return ResourceProviderConfig.attributeTypeMap;
  }

  public constructor() {}
}
