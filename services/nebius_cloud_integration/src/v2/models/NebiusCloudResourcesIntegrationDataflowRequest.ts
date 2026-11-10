import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata about resources in your Nebius tenant, such as compute instances and Kubernetes clusters.
 */
export class NebiusCloudResourcesIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NebiusCloudResourcesIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
