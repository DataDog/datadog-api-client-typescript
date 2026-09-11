/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings of the Cloud Cost Management dataflow.
 */
export class SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse {
  /**
   * Snowflake query tags ingested so that cost data can be broken down by them in Cloud Cost Management, as a comma-separated list of tag names.
   */
  "queryTags"?: string;

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
    queryTags: {
      baseName: "query_tags",
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
    return SnowflakeCloudCostMetricsIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
