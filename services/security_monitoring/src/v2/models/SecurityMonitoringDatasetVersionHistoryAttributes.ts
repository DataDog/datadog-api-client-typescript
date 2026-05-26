import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetVersionEntry } from "./SecurityMonitoringDatasetVersionEntry";

/**
 * The attributes of a dataset version history response.
 */
export class SecurityMonitoringDatasetVersionHistoryAttributes {
  /**
   * The total number of versions available for this dataset.
   */
  "count": number;
  /**
   * A map from version number (as a string) to the dataset state at that version.
   */
  "data": { [key: string]: SecurityMonitoringDatasetVersionEntry };
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
    count: {
      baseName: "count",
      type: "number",
      required: true,
      format: "int64",
    },
    data: {
      baseName: "data",
      type: "{ [key: string]: SecurityMonitoringDatasetVersionEntry; }",
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
    return SecurityMonitoringDatasetVersionHistoryAttributes.attributeTypeMap;
  }

  public constructor() {}
}
