/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Validation result of a configuration deployment dry run.
 */
export class FleetDeploymentConfigureV2DryRunResult {
  /**
   * Whether the configuration passed schema validation.
   */
  "configValidated"?: boolean;
  /**
   * Breakdown of ineligible host counts by reason. Only includes reasons with a
   * non-zero count. Absent from the response when no targeted host is ineligible.
   */
  "nonUpgradableByReason"?: { [key: string]: number };
  /**
   * Number of targeted hosts that are not eligible to receive this configuration.
   */
  "nonUpgradableHosts"?: number;

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
    configValidated: {
      baseName: "config_validated",
      type: "boolean",
    },
    nonUpgradableByReason: {
      baseName: "non_upgradable_by_reason",
      type: "{ [key: string]: number; }",
    },
    nonUpgradableHosts: {
      baseName: "non_upgradable_hosts",
      type: "number",
      format: "int64",
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
    return FleetDeploymentConfigureV2DryRunResult.attributeTypeMap;
  }

  public constructor() {}
}
