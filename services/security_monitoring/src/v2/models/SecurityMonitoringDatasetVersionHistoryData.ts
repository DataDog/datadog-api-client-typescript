import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetVersionHistoryAttributes } from "./SecurityMonitoringDatasetVersionHistoryAttributes";
import { SecurityMonitoringDatasetVersionHistoryType } from "./SecurityMonitoringDatasetVersionHistoryType";

/**
 * The data wrapper of a dataset version history response.
 */
export class SecurityMonitoringDatasetVersionHistoryData {
  /**
   * The attributes of a dataset version history response.
   */
  "attributes": SecurityMonitoringDatasetVersionHistoryAttributes;
  /**
   * The UUID of the dataset.
   */
  "id": string;
  /**
   * The type of resource for a dataset version history response.
   */
  "type": SecurityMonitoringDatasetVersionHistoryType;
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
    attributes: {
      baseName: "attributes",
      type: "SecurityMonitoringDatasetVersionHistoryAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringDatasetVersionHistoryType",
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
    return SecurityMonitoringDatasetVersionHistoryData.attributeTypeMap;
  }

  public constructor() {}
}
