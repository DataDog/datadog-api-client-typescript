import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RerouteOnCallPageRequestData } from "./RerouteOnCallPageRequestData";

/**
 * Full request to reroute an On-Call Page to a different team or user.
 */
export class RerouteOnCallPageRequest {
  /**
   * The data for rerouting an On-Call Page, including attributes and resource type.
   */
  "data": RerouteOnCallPageRequestData;
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
      type: "RerouteOnCallPageRequestData",
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
    return RerouteOnCallPageRequest.attributeTypeMap;
  }

  public constructor() {}
}
