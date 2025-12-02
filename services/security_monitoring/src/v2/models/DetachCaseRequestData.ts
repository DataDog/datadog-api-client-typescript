import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseDataType } from "./CaseDataType";
import { DetachCaseRequestDataRelationships } from "./DetachCaseRequestDataRelationships";

/**
 * Data for detaching security findings from their case.
 */
export class DetachCaseRequestData {
  /**
   * The unique identifier of the detachment request.
   */
  "id"?: string;
  /**
   * Relationships detaching security findings from their case.
   */
  "relationships"?: DetachCaseRequestDataRelationships;
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
    },
    relationships: {
      baseName: "relationships",
      type: "DetachCaseRequestDataRelationships",
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
    return DetachCaseRequestData.attributeTypeMap;
  }

  public constructor() {}
}
