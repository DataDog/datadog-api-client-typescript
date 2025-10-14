import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GcpScanOptionsDataAttributes } from "./GcpScanOptionsDataAttributes";
import { GcpScanOptionsDataType } from "./GcpScanOptionsDataType";

/**
 * Single GCP scan options entry.
 */
export class GcpScanOptionsData {
  /**
   * Attributes for GCP scan options configuration.
   */
  "attributes"?: GcpScanOptionsDataAttributes;
  /**
   * The GCP project ID.
   */
  "id": string;
  /**
   * GCP scan options resource type.
   */
  "type": GcpScanOptionsDataType;
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
      type: "GcpScanOptionsDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GcpScanOptionsDataType",
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
    return GcpScanOptionsData.attributeTypeMap;
  }

  public constructor() {}
}
