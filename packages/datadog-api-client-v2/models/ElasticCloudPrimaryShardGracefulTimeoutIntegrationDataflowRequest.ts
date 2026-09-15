/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
