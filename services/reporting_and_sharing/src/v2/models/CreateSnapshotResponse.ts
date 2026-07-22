import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateSnapshotDataResponse } from "./CreateSnapshotDataResponse";

/**
 * Response body for a snapshot creation request.
 */
export class CreateSnapshotResponse {
  /**
   * Data envelope for the snapshot creation response.
   */
  "data": CreateSnapshotDataResponse;
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
    data: {
      baseName: "data",
      type: "CreateSnapshotDataResponse",
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
    return CreateSnapshotResponse.attributeTypeMap;
  }

  public constructor() {}
}
