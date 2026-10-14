import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseAttributes } from "./CaseAttributes";
import { CaseRelationships } from "./CaseRelationships";
import { CaseResourceType } from "./CaseResourceType";

/**
 * A work item
 */
export class Case {
  /**
   * Work item resource attributes
   */
  "attributes": CaseAttributes;
  /**
   * Work item's identifier
   */
  "id": string;
  /**
   * Resources related to a work item
   */
  "relationships"?: CaseRelationships;
  /**
   * JSON:API resource type for work items.
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
