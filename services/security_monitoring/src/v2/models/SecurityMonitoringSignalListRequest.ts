import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalListRequestFilter } from "./SecurityMonitoringSignalListRequestFilter";
import { SecurityMonitoringSignalListRequestPage } from "./SecurityMonitoringSignalListRequestPage";
import { SecurityMonitoringSignalsSort } from "./SecurityMonitoringSignalsSort";

/**
 * The request for a security signal list.
 */
export class SecurityMonitoringSignalListRequest {
  /**
   * Search filters for listing security signals.
   */
  "filter"?: SecurityMonitoringSignalListRequestFilter;
  /**
   * The paging attributes for listing security signals.
   */
  "page"?: SecurityMonitoringSignalListRequestPage;
  /**
   * The sort parameters used for querying security signals.
   */
  "sort"?: SecurityMonitoringSignalsSort;
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
    filter: {
      baseName: "filter",
      type: "SecurityMonitoringSignalListRequestFilter",
    },
    page: {
      baseName: "page",
      type: "SecurityMonitoringSignalListRequestPage",
    },
    sort: {
      baseName: "sort",
      type: "SecurityMonitoringSignalsSort",
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
    return SecurityMonitoringSignalListRequest.attributeTypeMap;
  }

  public constructor() {}
}
