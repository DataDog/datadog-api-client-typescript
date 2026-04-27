import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ManagedOrgsData } from "./ManagedOrgsData";
import { OrgData } from "./OrgData";

/**
 * Response containing the current organization and its managed organizations.
 */
export class ManagedOrgsResponse {
  /**
   * The managed organizations resource.
   */
  "data": ManagedOrgsData;
  /**
   * Included organization resources.
   */
  "included": Array<OrgData>;
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
      type: "ManagedOrgsData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<OrgData>",
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
    return ManagedOrgsResponse.attributeTypeMap;
  }

  public constructor() {}
}
