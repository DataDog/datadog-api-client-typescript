import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CasePriority } from "./CasePriority";
import { CustomAttributeValue } from "./CustomAttributeValue";

/**
 * Case creation attributes
 */
export class CaseCreateAttributes {
  /**
   * Case custom attributes
   */
  "customAttributes"?: { [key: string]: CustomAttributeValue };
  /**
   * Description
   */
  "description"?: string;
  /**
   * Case priority
   */
  "priority"?: CasePriority;
  /**
   * Status of the case. Must be one of the existing statuses for the case's type.
   */
  "statusName"?: string;
  /**
   * Title
   */
  "title": string;
  /**
   * Case type UUID
   */
  "typeId": string;
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
    customAttributes: {
      baseName: "custom_attributes",
      type: "{ [key: string]: CustomAttributeValue; }",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    priority: {
      baseName: "priority",
      type: "CasePriority",
    },
    statusName: {
      baseName: "status_name",
      type: "string",
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    typeId: {
      baseName: "type_id",
      type: "string",
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
