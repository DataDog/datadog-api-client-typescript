import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SpecAttributesStatus } from "./SpecAttributesStatus";

/**
 * Attributes of an API spec.
 */
export class SpecAttributes {
  /**
   * The name of the spec.
   */
  "name"?: string;
  /**
   * The publication status of the spec.
   */
  "status"?: SpecAttributesStatus;
  /**
   * The version of the spec.
   */
  "version"?: string;
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
    name: {
      baseName: "name",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "SpecAttributesStatus",
    },
    version: {
      baseName: "version",
      type: "string",
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
    return SpecAttributes.attributeTypeMap;
  }

  public constructor() {}
}
