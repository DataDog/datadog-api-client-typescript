import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GcpScanOptionsInputUpdateDataAttributes } from "./GcpScanOptionsInputUpdateDataAttributes";
import { GcpScanOptionsInputUpdateDataType } from "./GcpScanOptionsInputUpdateDataType";

/**
 * Data object for updating the scan options of a single GCP project.
 */
export class GcpScanOptionsInputUpdateData {
  /**
   * Attributes for updating GCP scan options configuration.
   */
  "attributes"?: GcpScanOptionsInputUpdateDataAttributes;
  /**
   * The GCP project ID.
   */
  "id": string;
  /**
   * GCP scan options resource type.
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
