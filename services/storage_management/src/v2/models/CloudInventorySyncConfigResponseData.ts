import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CloudInventorySyncConfigAttributes } from "./CloudInventorySyncConfigAttributes";
import { CloudInventorySyncConfigResourceType } from "./CloudInventorySyncConfigResourceType";

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
