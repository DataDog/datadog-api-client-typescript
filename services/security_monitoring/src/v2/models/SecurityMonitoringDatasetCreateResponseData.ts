import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetType } from "./SecurityMonitoringDatasetType";

/**
 * The data wrapper of a dataset create response.
 */
export class SecurityMonitoringDatasetCreateResponseData {
  /**
   * The UUID of the newly created dataset.
   */
  "id": string;
  /**
   * The type of resource for a dataset response.
   */
  "type": SecurityMonitoringDatasetType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringDatasetType",
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
    return SecurityMonitoringDatasetCreateResponseData.attributeTypeMap;
  }

  public constructor() {}
}
