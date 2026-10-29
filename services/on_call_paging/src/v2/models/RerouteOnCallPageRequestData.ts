import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RerouteOnCallPageRequestDataAttributes } from "./RerouteOnCallPageRequestDataAttributes";
import { RerouteOnCallPageRequestDataType } from "./RerouteOnCallPageRequestDataType";

/**
 * The data for rerouting an On-Call Page, including attributes and resource type.
 */
export class RerouteOnCallPageRequestData {
  /**
   * Details about where to reroute the On-Call Page.
   */
  "attributes": RerouteOnCallPageRequestDataAttributes;
  /**
   * The type of resource used when rerouting an On-Call Page.
   */
  "type": RerouteOnCallPageRequestDataType;
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
      type: "RerouteOnCallPageRequestDataAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RerouteOnCallPageRequestDataType",
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
    return RerouteOnCallPageRequestData.attributeTypeMap;
  }

  public constructor() {}
}
