import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnapshotData } from "./SnapshotData";

/**
 * A single heatmap snapshot resource returned by create or update operations.
 */
export class Snapshot {
  /**
   * Data object representing a heatmap snapshot, including its identifier, type, and attributes.
   */
  "data"?: SnapshotData;
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
    data: {
      baseName: "data",
      type: "SnapshotData",
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
    return Snapshot.attributeTypeMap;
  }

  public constructor() {}
}
