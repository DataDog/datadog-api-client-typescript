/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes object for updating a Confluent resource.
 */
export class ConfluentAccountResourceAttributes {
  /**
   * Enable the `custom.consumer_lag_offset` metric, which contains extra metric tags.
   */
  "enableCustomMetrics"?: boolean;
  /**
   * The ID associated with a Confluent resource.
   */
  "id"?: string;
  /**
   * The resource type of the Resource. Can be `kafka`, `connector`, `ksql`, or `schema_registry`.
   */
  "resourceType": string;
  /**
   * A list of strings representing tags. Can be a single key, or key-value pairs separated by a colon.
   */
  "tags"?: Array<string>;

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
    enableCustomMetrics: {
      baseName: "enable_custom_metrics",
      type: "boolean",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    resourceType: {
      baseName: "resource_type",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return ConfluentAccountResourceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
