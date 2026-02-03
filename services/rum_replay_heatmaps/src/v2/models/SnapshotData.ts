import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnapshotDataAttributes } from "./SnapshotDataAttributes";
import { SnapshotUpdateRequestDataType } from "./SnapshotUpdateRequestDataType";

export class SnapshotData {
  "attributes"?: SnapshotDataAttributes;
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
