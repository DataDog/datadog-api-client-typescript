import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchSubjectTypeV2RequestData } from "./ExperimentsPatchSubjectTypeV2RequestData";

/**
 * Request to update the subject type.
 */
export class ExperimentsPatchSubjectTypeV2Request {
  /**
   * JSON:API resource containing the subject type identity and fields.
   */
  "data": ExperimentsPatchSubjectTypeV2RequestData;
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
      type: "ExperimentsPatchSubjectTypeV2RequestData",
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
    return ExperimentsPatchSubjectTypeV2Request.attributeTypeMap;
  }

  public constructor() {}
}
