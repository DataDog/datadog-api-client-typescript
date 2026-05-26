import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringDatasetAttributesRequest } from "./SecurityMonitoringDatasetAttributesRequest";
import { SecurityMonitoringDatasetUpdateType } from "./SecurityMonitoringDatasetUpdateType";

/**
 * The data wrapper of a dataset update request.
 */
export class SecurityMonitoringDatasetUpdateData {
  /**
   * The attributes of a dataset create or update request.
   */
  "attributes": SecurityMonitoringDatasetAttributesRequest;
  /**
   * The type of resource for a dataset update request.
   */
  "type": SecurityMonitoringDatasetUpdateType;
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
      type: "SecurityMonitoringDatasetAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringDatasetUpdateType",
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
    return SecurityMonitoringDatasetUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
