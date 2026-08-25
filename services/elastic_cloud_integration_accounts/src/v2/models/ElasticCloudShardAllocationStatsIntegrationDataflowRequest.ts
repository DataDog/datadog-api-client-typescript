import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The Elastic Cloud shard allocation stats dataflow.
 */
export class ElasticCloudShardAllocationStatsIntegrationDataflowRequest {
  /**
   * Whether the Elastic Cloud dataflow is enabled.
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
    return ElasticCloudShardAllocationStatsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
