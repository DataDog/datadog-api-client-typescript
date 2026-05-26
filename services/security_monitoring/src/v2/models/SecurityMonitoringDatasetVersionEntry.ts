import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetAttributesResponse } from "./SecurityMonitoringDatasetAttributesResponse";
import { SecurityMonitoringDatasetVersionFieldChange } from "./SecurityMonitoringDatasetVersionFieldChange";

/**
 * A single entry in the version history of a dataset.
 */
export class SecurityMonitoringDatasetVersionEntry {
  /**
   * The list of field changes between this version of the dataset and the previous one.
   */
  "changes": Array<SecurityMonitoringDatasetVersionFieldChange>;
  /**
   * The attributes of a Cloud SIEM dataset.
   */
  "dataset": SecurityMonitoringDatasetAttributesResponse;
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
    changes: {
      baseName: "changes",
      type: "Array<SecurityMonitoringDatasetVersionFieldChange>",
      required: true,
    },
    dataset: {
      baseName: "dataset",
      type: "SecurityMonitoringDatasetAttributesResponse",
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
    return SecurityMonitoringDatasetVersionEntry.attributeTypeMap;
  }

  public constructor() {}
}
