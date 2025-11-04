import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pagination details for the list of hosts in a deployment.
 */
export class FleetDeploymentHostsPage {
  /**
   * Current page index (zero-based).
   */
  "currentPage"?: number;
  /**
   * Number of hosts returned per page.
   */
  "pageSize"?: number;
  /**
   * Total number of hosts in this deployment.
   */
  "totalHosts"?: number;
  /**
   * Total number of pages available.
   */
  "totalPages"?: number;
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
    currentPage: {
      baseName: "current_page",
      type: "number",
      format: "int64",
    },
    pageSize: {
      baseName: "page_size",
      type: "number",
      format: "int64",
    },
    totalHosts: {
      baseName: "total_hosts",
      type: "number",
      format: "int64",
    },
    totalPages: {
      baseName: "total_pages",
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
    return FleetDeploymentHostsPage.attributeTypeMap;
  }

  public constructor() {}
}
