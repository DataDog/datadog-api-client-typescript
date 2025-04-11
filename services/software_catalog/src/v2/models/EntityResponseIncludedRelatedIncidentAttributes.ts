import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Incident attributes.
 */
export class EntityResponseIncludedRelatedIncidentAttributes {
  /**
   * Incident creation time.
   */
  "createdAt"?: Date;
  /**
   * Incident URL.
   */
  "htmlUrl"?: string;
  /**
   * Incident provider.
   */
  "provider"?: string;
  /**
   * Incident status.
   */
  "status"?: string;
  /**
   * Incident title.
   */
  "title"?: string;
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
      baseName: "createdAt",
      type: "Date",
      format: "date-time",
    },
    htmlUrl: {
      baseName: "htmlURL",
      type: "string",
    },
    provider: {
      baseName: "provider",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    title: {
      baseName: "title",
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
    return EntityResponseIncludedRelatedIncidentAttributes.attributeTypeMap;
  }

  public constructor() {}
}
