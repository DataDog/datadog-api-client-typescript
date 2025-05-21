/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `OCIMetricsConfig` object.
 */
export class OCIMetricsConfig {
  /**
   * The compartment tag filters to apply to metric collection. Each value represents a Datadog tag in the format key:value.
   */
  "compartmentTagFilters"?: Array<string>;
  /**
   * Enable or disable metric collection. Enabled by default for all services.
   */
  "enabled"?: boolean;
  /**
   * The list of services to exclude from metric collection.
   */
  "excludedServices"?: Array<string>;

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
    compartmentTagFilters: {
      baseName: "compartment_tag_filters",
      type: "Array<string>",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    excludedServices: {
      baseName: "excluded_services",
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
    return OCIMetricsConfig.attributeTypeMap;
  }

  public constructor() {}
}
