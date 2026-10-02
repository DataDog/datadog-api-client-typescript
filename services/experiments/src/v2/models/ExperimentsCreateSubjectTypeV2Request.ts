import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsCreateSubjectTypeV2RequestData } from "./ExperimentsCreateSubjectTypeV2RequestData";

/**
 * Request to create a subject type for experiment assignments.
 */
export class ExperimentsCreateSubjectTypeV2Request {
  /**
   * Subject type resource to create.
   */
  "data": ExperimentsCreateSubjectTypeV2RequestData;
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
      type: "ExperimentsCreateSubjectTypeV2RequestData",
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
    return ExperimentsCreateSubjectTypeV2Request.attributeTypeMap;
  }

  public constructor() {}
}
