import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseAttributes } from "./CaseAttributes";
import { CaseRelationships } from "./CaseRelationships";
import { CaseResourceType } from "./CaseResourceType";

/**
 * A case
 */
export class Case {
  /**
   * Case attributes
   */
  "attributes": CaseAttributes;
  /**
   * Case's identifier
   */
  "id": string;
  /**
   * Resources related to a case
   */
  "relationships"?: CaseRelationships;
  /**
   * Case resource type
   */
  "type": CaseResourceType;
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
      type: "CaseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "CaseRelationships",
    },
    type: {
      baseName: "type",
      type: "CaseResourceType",
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
    return Case.attributeTypeMap;
  }

  public constructor() {}
}
