import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnapshotDataAttributes } from "./SnapshotDataAttributes";
import { SnapshotUpdateRequestDataType } from "./SnapshotUpdateRequestDataType";

/**
 * Data object representing a heatmap snapshot, including its identifier, type, and attributes.
 */
export class SnapshotData {
  /**
   * Attributes of a heatmap snapshot, including view context, device information, and audit metadata.
   */
  "attributes"?: SnapshotDataAttributes;
  /**
   * Unique identifier of the heatmap snapshot.
   */
  "id"?: string;
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
      type: "SnapshotDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return SnapshotData.attributeTypeMap;
  }

  public constructor() {}
}
