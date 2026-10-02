import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsTrafficSummaryV2DTOData } from "./ExperimentsTrafficSummaryV2DTOData";

/**
 * Response containing the experiment traffic summary.
 */
export class ExperimentsTrafficSummaryV2DTO {
  /**
   * JSON:API resource containing the experiment traffic summary identity and fields.
   */
  "data": ExperimentsTrafficSummaryV2DTOData;
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
      type: "ExperimentsTrafficSummaryV2DTOData",
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
    return ExperimentsTrafficSummaryV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
