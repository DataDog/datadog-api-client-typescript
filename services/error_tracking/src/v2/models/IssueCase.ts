import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueCaseAttributes } from "./IssueCaseAttributes";
import { IssueCaseRelationships } from "./IssueCaseRelationships";
import { IssueCaseResourceType } from "./IssueCaseResourceType";

/**
 * The case attached to the issue.
 */
export class IssueCase {
  /**
   * Object containing the information of a case.
   */
  "attributes": IssueCaseAttributes;
  /**
   * Case identifier.
   */
  "id": string;
  /**
   * Resources related to a case.
   */
  "relationships"?: IssueCaseRelationships;
  /**
   * Type of the object.
   */
  "type": IssueCaseResourceType;
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
      type: "IssueCaseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IssueCaseRelationships",
    },
    type: {
      baseName: "type",
      type: "IssueCaseResourceType",
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
    return IssueCase.attributeTypeMap;
  }

  public constructor() {}
}
