import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The target of an on-call page.
 */
export class IncidentOnCallPageTarget {
  /**
   * The identifier of the page target.
   */
  "identifier": string;
  /**
   * The type of the page target.
   */
  "type": string;
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
    identifier: {
      baseName: "identifier",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
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
    return IncidentOnCallPageTarget.attributeTypeMap;
  }

  public constructor() {}
}
