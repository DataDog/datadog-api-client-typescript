import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a case type, which define a classification category for cases. Organizations use case types to model different workflows (for example, Security Incident, Bug Report, Change Request).
 */
export class CaseTypeResourceAttributes {
  /**
   * Timestamp when the case type was marked as deleted. A null value indicates the case type is active.
   */
  "deletedAt"?: Date;
  /**
   * A detailed description explaining when this case type should be used.
   */
  "description"?: string;
  /**
   * An emoji icon representing the case type in the UI.
   */
  "emoji"?: string;
  /**
   * The display name of the case type, shown in the Case Management UI when creating or viewing cases.
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
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    emoji: {
      baseName: "emoji",
      type: "string",
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
    return CaseTypeResourceAttributes.attributeTypeMap;
  }

  public constructor() {}
}
