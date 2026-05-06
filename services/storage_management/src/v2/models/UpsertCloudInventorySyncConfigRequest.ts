import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpsertCloudInventorySyncConfigRequestData } from "./UpsertCloudInventorySyncConfigRequestData";

/**
 * Request body for creating or updating a cloud inventory sync configuration.
 */
export class UpsertCloudInventorySyncConfigRequest {
  /**
   * Storage Management configuration data for the create or update request.
   */
  "data": UpsertCloudInventorySyncConfigRequestData;
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
      type: "UpsertCloudInventorySyncConfigRequestData",
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
    return UpsertCloudInventorySyncConfigRequest.attributeTypeMap;
  }

  public constructor() {}
}
