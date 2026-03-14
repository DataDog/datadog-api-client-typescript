import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Scorecard attributes.
 */
export class ScorecardListResponseAttributes {
  /**
   * Creation time of the scorecard.
   */
  "createdAt": Date;
  /**
   * The description of the scorecard.
   */
  "description"?: string;
  /**
   * Time of last scorecard modification.
   */
  "modifiedAt": Date;
  /**
   * The name of the scorecard.
   */
  "name": string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
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
    return ScorecardListResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
