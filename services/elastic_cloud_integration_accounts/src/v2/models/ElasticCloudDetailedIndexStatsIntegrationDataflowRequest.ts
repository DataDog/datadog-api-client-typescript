import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The Elastic Cloud detailed index stats dataflow.
 */
export class ElasticCloudDetailedIndexStatsIntegrationDataflowRequest {
  /**
   * Whether the Elastic Cloud dataflow is enabled.
   */
  "enabled"?: boolean;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ElasticCloudDetailedIndexStatsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
