/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
