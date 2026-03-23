import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HamrOrgConnectionDataRequest } from "./HamrOrgConnectionDataRequest";

/**
 * Request payload for creating or updating a HAMR organization connection.
 */
export class HamrOrgConnectionRequest {
  /**
   * Data object for a HAMR organization connection request.
   */
  "data": HamrOrgConnectionDataRequest;
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
      type: "HamrOrgConnectionDataRequest",
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
    return HamrOrgConnectionRequest.attributeTypeMap;
  }

  public constructor() {}
}
