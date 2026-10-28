import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreatePageRequestDataAttributesTarget } from "./CreatePageRequestDataAttributesTarget";

/**
 * Details about where to reroute the On-Call Page.
 */
export class RerouteOnCallPageRequestDataAttributes {
  /**
   * An optional comment explaining why the page is being rerouted.
   */
  "comment"?: string;
  /**
   * Information about the target to notify (such as a team or user).
   */
  "target": CreatePageRequestDataAttributesTarget;
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
    comment: {
      baseName: "comment",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "CreatePageRequestDataAttributesTarget",
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
    return RerouteOnCallPageRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
