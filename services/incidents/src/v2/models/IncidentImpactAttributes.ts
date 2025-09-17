import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The incident impact's attributes.
 */
export class IncidentImpactAttributes {
  /**
   * Timestamp when the impact was created.
   */
  "created"?: Date;
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
   * The type of impact.
   */
  "impactType"?: string;
  /**
   * Timestamp when the impact was last modified.
   */
  "modified"?: Date;
  /**
   * Timestamp representing when the impact started.
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
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
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
    impactType: {
      baseName: "impact_type",
      type: "string",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
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
    return IncidentImpactAttributes.attributeTypeMap;
  }

  public constructor() {}
}
