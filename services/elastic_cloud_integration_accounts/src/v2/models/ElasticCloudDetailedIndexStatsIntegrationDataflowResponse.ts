import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationAccountDataflowStatus } from "./IntegrationAccountDataflowStatus";

/**
 * The Elastic Cloud detailed index stats dataflow.
 */
export class ElasticCloudDetailedIndexStatsIntegrationDataflowResponse {
  /**
   * Whether the Elastic Cloud dataflow is enabled.
   */
  "enabled"?: boolean;
  /**
   * Read-only collection status of a dataflow.
   */
  "status"?: IntegrationAccountDataflowStatus;
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
    status: {
      baseName: "status",
      type: "IntegrationAccountDataflowStatus",
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
    return ElasticCloudDetailedIndexStatsIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
