import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The incident impact's attributes for a create request.
 */
export class IncidentImpactCreateAttributes {
  /**
   * Description of the impact.
   */
  "description": string;
  /**
   * Timestamp when the impact ended.
   */
  "endAt"?: Date;
  /**
   * An object mapping impact field names to field values.
   */
  "fields"?: { [key: string]: any };
  /**
   * Timestamp when the impact started.
   */
  "startAt": Date;
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
      required: true,
    },
    endAt: {
      baseName: "end_at",
      type: "Date",
      format: "date-time",
    },
    fields: {
      baseName: "fields",
      type: "{ [key: string]: any; }",
    },
    startAt: {
      baseName: "start_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return IncidentImpactCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
