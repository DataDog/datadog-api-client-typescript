import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeCreateRequestAttributes } from "./DowntimeCreateRequestAttributes";
import { DowntimeResourceType } from "./DowntimeResourceType";

/**
 * Object to create a downtime.
 */
export class DowntimeCreateRequestData {
  /**
   * Downtime details.
   */
  "attributes": DowntimeCreateRequestAttributes;
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
      type: "DowntimeCreateRequestAttributes",
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
    return DowntimeCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
