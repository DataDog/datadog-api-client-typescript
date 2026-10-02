import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsSubjectTypeV2DTOData } from "./ExperimentsSubjectTypeV2DTOData";

/**
 * Response containing the subject type.
 */
export class ExperimentsSubjectTypeV2DTO {
  /**
   * JSON:API resource containing the subject type identity and fields.
   */
  "data": ExperimentsSubjectTypeV2DTOData;
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
      type: "ExperimentsSubjectTypeV2DTOData",
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
    return ExperimentsSubjectTypeV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
