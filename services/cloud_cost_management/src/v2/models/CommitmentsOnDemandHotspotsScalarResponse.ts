import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsOnDemandHotspotsScalarResponseData } from "./CommitmentsOnDemandHotspotsScalarResponseData";

/**
 * Response containing scalar on-demand hot-spots data for cloud commitment programs.
 */
export class CommitmentsOnDemandHotspotsScalarResponse {
  /**
   * The scalar on-demand hot-spots resource.
   */
  "data": CommitmentsOnDemandHotspotsScalarResponseData;
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
      type: "CommitmentsOnDemandHotspotsScalarResponseData",
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
    return CommitmentsOnDemandHotspotsScalarResponse.attributeTypeMap;
  }

  public constructor() {}
}
