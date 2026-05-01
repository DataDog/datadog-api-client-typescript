/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudInventoryCloudProviderId } from "./CloudInventoryCloudProviderId";
import { CloudInventoryCloudProviderRequestType } from "./CloudInventoryCloudProviderRequestType";
import { UpsertCloudInventorySyncConfigRequestAttributes } from "./UpsertCloudInventorySyncConfigRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API data envelope for an upsert sync configuration request.
 */
export class UpsertCloudInventorySyncConfigRequestData {
  /**
   * Provider-specific configuration. Include the object that matches `data.id` (`aws`, `gcp`, or `azure`).
   */
  "attributes": UpsertCloudInventorySyncConfigRequestAttributes;
  /**
   * Cloud provider for this sync configuration (`aws`, `gcp`, or `azure`). For requests, must match the provider block supplied under `attributes`.
   */
  "id": CloudInventoryCloudProviderId;
  /**
   * JSON:API type for upsert sync configuration requests.
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
