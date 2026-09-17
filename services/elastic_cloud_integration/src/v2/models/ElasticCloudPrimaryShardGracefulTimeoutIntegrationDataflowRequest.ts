import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Tolerance for slow primary shard requests. Primary shard metrics can grow large enough for the request to time out; enabling this keeps the rest of the collection running when that happens instead of failing the run. Only has an effect alongside `elastic-cloud-primary-shard-stats`.
 */
export class ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest {
  /**
   * Whether this tolerance is applied. Defaults to `false`; set to `true` to apply it.
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
    return ElasticCloudPrimaryShardGracefulTimeoutIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
