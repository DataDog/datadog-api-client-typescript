/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudInventorySyncConfigAttributes } from "./CloudInventorySyncConfigAttributes";
import { CloudInventorySyncConfigResourceType } from "./CloudInventorySyncConfigResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Storage Management configuration data.
 */
export class CloudInventorySyncConfigResponseData {
  /**
   * Attributes for a Storage Management configuration. Fields other than `id` may be empty in the response immediately after a create or update; subsequent reads return the full configuration.
   */
  "attributes": CloudInventorySyncConfigAttributes;
  /**
   * Unique identifier for this Storage Management configuration.
   */
  "id": string;
  /**
   * Always `sync_configs`.
   */
  "type": CloudInventorySyncConfigResourceType;

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
      type: "CloudInventorySyncConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CloudInventorySyncConfigResourceType",
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
    return CloudInventorySyncConfigResponseData.attributeTypeMap;
  }

  public constructor() {}
}
