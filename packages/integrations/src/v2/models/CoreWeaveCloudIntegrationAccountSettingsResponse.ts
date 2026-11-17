import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

/**
 * Settings configured on the CoreWeave integration account.
 */
export class CoreWeaveCloudIntegrationAccountSettingsResponse {
  /**
   * Tags added to all data collected from this CoreWeave account.
   */
  "accountTags"?: Array<string>;
  /**
   * Tag-filter rules limiting metric collection to matching clusters. Absent when no filters are configured.
   */
  "clusterFilters"?: Array<string>;
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
    accountTags: {
      baseName: "account_tags",
      type: "Array<string>",
    },
    clusterFilters: {
      baseName: "cluster_filters",
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
    return CoreWeaveCloudIntegrationAccountSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
