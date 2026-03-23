/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringCriticalAssetSeverity } from "./SecurityMonitoringCriticalAssetSeverity";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The critical asset properties to be updated.
 */
export class SecurityMonitoringCriticalAssetUpdateAttributes {
  /**
   * Whether the critical asset is enabled.
   */
  "enabled"?: boolean;
  /**
   * The query for the critical asset. It uses the same syntax as the queries to search signals in the Signals Explorer.
   */
  "query"?: string;
  /**
   * The rule query of the critical asset, with the same syntax as the search bar for detection rules. This determines which rules this critical asset will apply to.
   */
  "ruleQuery"?: string;
  /**
   * Severity associated with this critical asset. Either an explicit severity can be set, or the severity can be increased or decreased.
   */
  "severity"?: SecurityMonitoringCriticalAssetSeverity;
  /**
   * List of tags associated with the critical asset.
   */
  "tags"?: Array<string>;
  /**
   * The version of the critical asset being updated. Used for optimistic locking to prevent concurrent modifications.
   */
  "version"?: number;

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
    query: {
      baseName: "query",
      type: "string",
    },
    ruleQuery: {
      baseName: "rule_query",
      type: "string",
    },
    severity: {
      baseName: "severity",
      type: "SecurityMonitoringCriticalAssetSeverity",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int32",
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
    return SecurityMonitoringCriticalAssetUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
