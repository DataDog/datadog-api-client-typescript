import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudInventoryCloudProviderId } from "./CloudInventoryCloudProviderId";
import { CloudInventoryCloudProviderRequestType } from "./CloudInventoryCloudProviderRequestType";
import { UpsertCloudInventorySyncConfigRequestAttributes } from "./UpsertCloudInventorySyncConfigRequestAttributes";

/**
 * Storage Management configuration data for the create or update request.
 */
export class UpsertCloudInventorySyncConfigRequestData {
  /**
   * Settings for the cloud provider specified in `data.id`. Include only the matching provider object (`aws`, `gcp`, or `azure`).
   */
  "attributes": UpsertCloudInventorySyncConfigRequestAttributes;
  /**
   * Cloud provider for this sync configuration (`aws`, `gcp`, or `azure`). For requests, must match the provider block supplied under `attributes`.
   */
  "id": CloudInventoryCloudProviderId;
  /**
   * Always `cloud_provider`.
   */
  "type": CloudInventoryCloudProviderRequestType;
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
      type: "UpsertCloudInventorySyncConfigRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "CloudInventoryCloudProviderId",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CloudInventoryCloudProviderRequestType",
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
    return UpsertCloudInventorySyncConfigRequestData.attributeTypeMap;
  }

  public constructor() {}
}
