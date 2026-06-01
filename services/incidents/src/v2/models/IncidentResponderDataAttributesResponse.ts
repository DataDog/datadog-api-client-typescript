import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of an incident responder in a response.
 */
export class IncidentResponderDataAttributesResponse {
  /**
   * Timestamp when the responder was created.
   */
  "created": Date;
  /**
   * The external ID of the responder.
   */
  "externalId"?: string;
  /**
   * The external source of the responder.
   */
  "externalSource"?: string;
  /**
   * Whether this responder counts toward billing.
   */
  "isBillable": boolean;
  /**
   * Timestamp when the responder was last active.
   */
  "lastActive"?: Date;
  /**
   * Additional metadata for the responder.
   */
  "meta"?: { [key: string]: any };
  /**
   * Timestamp when the responder was last modified.
   */
  "modified": Date;
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
      required: true,
      format: "date-time",
    },
    externalId: {
      baseName: "external_id",
      type: "string",
    },
    externalSource: {
      baseName: "external_source",
      type: "string",
    },
    isBillable: {
      baseName: "is_billable",
      type: "boolean",
      required: true,
    },
    lastActive: {
      baseName: "last_active",
      type: "Date",
      format: "date-time",
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: any; }",
    },
    modified: {
      baseName: "modified",
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
    return IncidentResponderDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
