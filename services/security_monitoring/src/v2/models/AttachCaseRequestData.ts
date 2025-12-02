import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AttachCaseRequestDataRelationships } from "./AttachCaseRequestDataRelationships";
import { CaseDataType } from "./CaseDataType";

/**
 * Data of the case to attach security findings to.
 */
export class AttachCaseRequestData {
  /**
   * The unique identifier of the case.
   */
  "id": string;
  /**
   * Relationships of the case to attach security findings to.
   */
  "relationships"?: AttachCaseRequestDataRelationships;
  /**
   * Cases resource type.
   */
  "type": CaseDataType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "AttachCaseRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "CaseDataType",
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
    return AttachCaseRequestData.attributeTypeMap;
  }

  public constructor() {}
}
