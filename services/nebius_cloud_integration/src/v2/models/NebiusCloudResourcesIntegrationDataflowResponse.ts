import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Metadata about resources in your Nebius tenant, such as compute instances and Kubernetes clusters.
 */
export class NebiusCloudResourcesIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data. Absent when the dataflow has never been configured.
   */
  "enabled"?: boolean;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
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
    return NebiusCloudResourcesIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
