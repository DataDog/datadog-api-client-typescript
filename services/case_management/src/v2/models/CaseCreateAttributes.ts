import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CasePriority } from "./CasePriority";
import { CaseType } from "./CaseType";

/**
 * Case creation attributes
 */
export class CaseCreateAttributes {
  /**
   * Description
   */
  "description"?: string;
  /**
   * Case priority
   */
  "priority"?: CasePriority;
  /**
   * Title
   */
  "title": string;
  /**
   * Case type
   */
  "type": CaseType;
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
    description: {
      baseName: "description",
      type: "string",
    },
    priority: {
      baseName: "priority",
      type: "CasePriority",
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CaseType",
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
    return CaseCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
