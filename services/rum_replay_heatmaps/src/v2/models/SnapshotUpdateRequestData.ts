import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnapshotUpdateRequestDataAttributes } from "./SnapshotUpdateRequestDataAttributes";
import { SnapshotUpdateRequestDataType } from "./SnapshotUpdateRequestDataType";

/**
 * Data object for a heatmap snapshot update request, containing the resource identifier, type, and attributes.
 */
export class SnapshotUpdateRequestData {
  /**
   * Attributes for updating a heatmap snapshot, including event, session, and view context.
   */
  "attributes"?: SnapshotUpdateRequestDataAttributes;
  /**
   * Unique identifier of the heatmap snapshot to update.
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
      type: "SnapshotUpdateRequestDataAttributes",
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
    return SnapshotUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
