import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GcpScanOptionsInputUpdateDataAttributes } from "./GcpScanOptionsInputUpdateDataAttributes";
import { GcpScanOptionsInputUpdateDataType } from "./GcpScanOptionsInputUpdateDataType";

/**
 * The definition of `GcpScanOptionsInputUpdateData` object.
 */
export class GcpScanOptionsInputUpdateData {
  /**
   * The definition of `GcpScanOptionsInputUpdateDataAttributes` object.
   */
  "attributes"?: GcpScanOptionsInputUpdateDataAttributes;
  /**
   * The `GcpScanOptionsInputUpdateData` `id`.
   */
  "id": string;
  /**
   * Gcp scan options resource type.
   */
  "type": GcpScanOptionsInputUpdateDataType;
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
      type: "GcpScanOptionsInputUpdateDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GcpScanOptionsInputUpdateDataType",
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
    return GcpScanOptionsInputUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
