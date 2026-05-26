import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetData } from "./SecurityMonitoringDatasetData";
import { SecurityMonitoringDatasetsListMeta } from "./SecurityMonitoringDatasetsListMeta";

/**
 * Response containing a paginated list of Cloud SIEM datasets.
 */
export class SecurityMonitoringDatasetsListResponse {
  /**
   * A list of dataset data items.
   */
  "data": Array<SecurityMonitoringDatasetData>;
  /**
   * Metadata returned with a list of datasets.
   */
  "meta": SecurityMonitoringDatasetsListMeta;
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
    data: {
      baseName: "data",
      type: "Array<SecurityMonitoringDatasetData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SecurityMonitoringDatasetsListMeta",
      required: true,
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
    return SecurityMonitoringDatasetsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
