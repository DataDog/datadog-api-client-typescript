import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomTopologyMapLayoutDirection } from "./CustomTopologyMapLayoutDirection";
import { CustomTopologyMapLayoutType } from "./CustomTopologyMapLayoutType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapLayout {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "direction": CustomTopologyMapLayoutDirection;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CustomTopologyMapLayoutType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    direction: {
      baseName: "direction",
      type: "CustomTopologyMapLayoutDirection",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomTopologyMapLayoutType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomTopologyMapLayout.attributeTypeMap;
  }

  public constructor() {}
}
