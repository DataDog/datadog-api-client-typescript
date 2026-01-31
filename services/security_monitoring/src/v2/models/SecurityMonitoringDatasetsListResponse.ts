import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetDataResponse } from "./SecurityMonitoringDatasetDataResponse";
import { SecurityMonitoringDatasetListMeta } from "./SecurityMonitoringDatasetListMeta";

/**
 * Response containing a list of security monitoring datasets.
 */
export class SecurityMonitoringDatasetsListResponse {
  /**
   * Array of datasets.
   */
  "data": Array<SecurityMonitoringDatasetDataResponse>;
  /**
   * Metadata for dataset list responses.
   */
  "meta": SecurityMonitoringDatasetListMeta;
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
      type: "Array<SecurityMonitoringDatasetDataResponse>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "SecurityMonitoringDatasetListMeta",
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
