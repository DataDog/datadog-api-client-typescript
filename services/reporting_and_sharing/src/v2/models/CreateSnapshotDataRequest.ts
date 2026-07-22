import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateSnapshotDataAttributesRequest } from "./CreateSnapshotDataAttributesRequest";
import { CreateSnapshotType } from "./CreateSnapshotType";

/**
 * Data envelope for snapshot creation.
 */
export class CreateSnapshotDataRequest {
  /**
   * Attributes for snapshot creation.
   */
  "attributes": CreateSnapshotDataAttributesRequest;
  /**
   * The type identifier for snapshot creation resources.
   */
  "type": CreateSnapshotType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "CreateSnapshotDataAttributesRequest",
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
    return CreateSnapshotDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
