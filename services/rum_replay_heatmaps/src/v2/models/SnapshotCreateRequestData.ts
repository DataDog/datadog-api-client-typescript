import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnapshotCreateRequestDataAttributes } from "./SnapshotCreateRequestDataAttributes";
import { SnapshotUpdateRequestDataType } from "./SnapshotUpdateRequestDataType";

/**
 * Data object for a heatmap snapshot creation request, containing the resource type and attributes.
 */
export class SnapshotCreateRequestData {
  /**
   * Attributes for creating a heatmap snapshot, including the view, session, event, and device context.
   */
  "attributes"?: SnapshotCreateRequestDataAttributes;
  /**
   * Snapshots resource type.
   */
  "type": SnapshotUpdateRequestDataType;
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
      type: "SnapshotCreateRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "SnapshotUpdateRequestDataType",
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
    return SnapshotCreateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
