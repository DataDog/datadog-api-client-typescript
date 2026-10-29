/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AWS Metrics Collection resource type tag filter.
 * Each filter targets either a specific AWS service's resource types (`service` and
 * `resource_types`) or custom metrics (`custom`). These two modes are mutually exclusive.
 * The `expression` defines a tag filter that Datadog uses when collecting metrics from the
 * resource types of a specified service. Wildcards, such as `?` (match a single character)
 * and `*` (match multiple characters), and exclusion using `!` before the tag are supported.
 * For example, `env:production AND instance-type:c?.* AND !region:us-east-1`.
 */
export class AWSResourceTypeTagFilter {
  /**
   * Whether the tag filter applies to custom metrics. When `true`, `service` and `resource_types` must be omitted.
   */
  "custom"?: boolean;
  /**
   * The tag filter expression to apply when collecting metrics for the matching resource types.
   */
  "expression": string;
  /**
   * The AWS resource types of the service to which the tag filter applies. Required when `service` is set. Use `*` as the only entry to match all resource types of the service; `*` cannot be combined with specific resource types.
   */
  "resourceTypes"?: Array<string>;
  /**
   * The AWS service for which the tag filter defined in `expression` will be applied. Required unless `custom` is `true`, and must be set together with `resource_types`.
   */
  "service"?: string;

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
    custom: {
      baseName: "custom",
      type: "boolean",
    },
    expression: {
      baseName: "expression",
      type: "string",
      required: true,
    },
    resourceTypes: {
      baseName: "resource_types",
      type: "Array<string>",
    },
    service: {
      baseName: "service",
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
    return AWSResourceTypeTagFilter.attributeTypeMap;
  }

  public constructor() {}
}
