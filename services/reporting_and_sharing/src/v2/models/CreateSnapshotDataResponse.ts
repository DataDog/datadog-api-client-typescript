import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateSnapshotDataAttributesResponse } from "./CreateSnapshotDataAttributesResponse";
import { CreateSnapshotType } from "./CreateSnapshotType";

/**
 * Data envelope for the snapshot creation response.
 */
export class CreateSnapshotDataResponse {
  /**
   * Attributes of the created snapshot.
   */
  "attributes": CreateSnapshotDataAttributesResponse;
  /**
   * The unique identifier of the created snapshot.
   */
  "id": string;
  /**
   * The type identifier for snapshot creation resources.
   */
  "type": CreateSnapshotType;
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
      type: "CreateSnapshotDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CreateSnapshotType",
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
    return CreateSnapshotDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
