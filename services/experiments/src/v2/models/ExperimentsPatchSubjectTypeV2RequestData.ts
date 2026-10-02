import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchSubjectTypeV2RequestDataAttributes } from "./ExperimentsPatchSubjectTypeV2RequestDataAttributes";
import { ExperimentsSubjectTypeV2DTODataType } from "./ExperimentsSubjectTypeV2DTODataType";

/**
 * JSON:API resource containing the subject type identity and fields.
 */
export class ExperimentsPatchSubjectTypeV2RequestData {
  /**
   * Fields supplied to update the subject type.
   */
  "attributes": ExperimentsPatchSubjectTypeV2RequestDataAttributes;
  /**
   * ID of the subject type.
   */
  "id"?: string;
  /**
   * Subject types resource type.
   */
  "type": ExperimentsSubjectTypeV2DTODataType;
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
      type: "ExperimentsPatchSubjectTypeV2RequestDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ExperimentsSubjectTypeV2DTODataType",
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
    return ExperimentsPatchSubjectTypeV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
