import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseDataType } from "./CaseDataType";
import { CreateCaseRequestDataAttributes } from "./CreateCaseRequestDataAttributes";
import { CreateCaseRequestDataRelationships } from "./CreateCaseRequestDataRelationships";

/**
 * Data of the case to create.
 */
export class CreateCaseRequestData {
  /**
   * Attributes of the case to create.
   */
  "attributes"?: CreateCaseRequestDataAttributes;
  /**
   * Relationships of the case to create.
   */
  "relationships"?: CreateCaseRequestDataRelationships;
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
    attributes: {
      baseName: "attributes",
      type: "CreateCaseRequestDataAttributes",
    },
    relationships: {
      baseName: "relationships",
      type: "CreateCaseRequestDataRelationships",
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
    return CreateCaseRequestData.attributeTypeMap;
  }

  public constructor() {}
}
