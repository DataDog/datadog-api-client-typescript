import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HamrOrgConnectionAttributesRequest } from "./HamrOrgConnectionAttributesRequest";
import { HamrOrgConnectionType } from "./HamrOrgConnectionType";

export class HamrOrgConnectionDataRequest {
  "attributes": HamrOrgConnectionAttributesRequest;
  /**
   * The organization UUID for this HAMR connection. Must match the authenticated organization's UUID.
   */
  "id": string;
  /**
   * Type of the HAMR organization connection resource.
   */
  "type": HamrOrgConnectionType;
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
      type: "HamrOrgConnectionAttributesRequest",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "HamrOrgConnectionType",
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
    return HamrOrgConnectionDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
