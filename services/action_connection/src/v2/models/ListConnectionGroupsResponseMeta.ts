import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IntegrationCounts } from "./IntegrationCounts";

/**
 * Metadata for the list connection groups response.
 */
export class ListConnectionGroupsResponseMeta {
  /**
   * Count of integrations by type.
   */
  "integrationCounts"?: Array<IntegrationCounts>;
  /**
   * The total number of connection groups.
   */
  "total": number;
  /**
   * The total number of connection groups that match the specified filters.
   */
  "totalFiltered": number;
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
    integrationCounts: {
      baseName: "integration_counts",
      type: "Array<IntegrationCounts>",
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
    },
    totalFiltered: {
      baseName: "total_filtered",
      type: "number",
      required: true,
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
    return ListConnectionGroupsResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
