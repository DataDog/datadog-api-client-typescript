import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeResourceType } from "./DowntimeResourceType";
import { DowntimeUpdateRequestAttributes } from "./DowntimeUpdateRequestAttributes";

/**
 * Object to update a downtime.
 */
export class DowntimeUpdateRequestData {
  /**
   * Attributes of the downtime to update.
   */
  "attributes": DowntimeUpdateRequestAttributes;
  /**
   * ID of this downtime.
   */
  "id": string;
  /**
   * Downtime resource type.
   */
  "type": DowntimeResourceType;
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
      type: "DowntimeUpdateRequestAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DowntimeResourceType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DowntimeUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
