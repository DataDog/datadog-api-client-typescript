import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringCriticalAssetSeverity } from "./SecurityMonitoringCriticalAssetSeverity";

/**
 * Object containing the attributes of the critical asset to be created.
 */
export class SecurityMonitoringCriticalAssetCreateAttributes {
  /**
   * Whether the critical asset is enabled. Defaults to `true` if not specified.
   */
  "enabled"?: boolean;
  /**
   * The query for the critical asset. It uses the same syntax as the queries to search signals in the Signals Explorer.
   */
  "query": string;
  /**
   * The rule query of the critical asset, with the same syntax as the search bar for detection rules. This determines which rules this critical asset will apply to.
   */
  "ruleQuery": string;
  /**
   * Severity associated with this critical asset. Either an explicit severity can be set, or the severity can be increased or decreased.
   */
  "severity": SecurityMonitoringCriticalAssetSeverity;
  /**
   * List of tags associated with the critical asset.
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
    },
    ruleQuery: {
      baseName: "rule_query",
      type: "string",
      required: true,
    },
    severity: {
      baseName: "severity",
      type: "SecurityMonitoringCriticalAssetSeverity",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
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
    return SecurityMonitoringCriticalAssetCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
