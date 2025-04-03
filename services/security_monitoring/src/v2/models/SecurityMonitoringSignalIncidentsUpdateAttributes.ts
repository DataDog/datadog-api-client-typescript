import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes describing the new list of related signals for a security signal.
 */
export class SecurityMonitoringSignalIncidentsUpdateAttributes {
  /**
   * Array of incidents that are associated with this signal.
   */
  "incidentIds": Array<number>;
  /**
   * Version of the updated signal. If server side version is higher, update will be rejected.
   */
  "version"?: number;
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
    incidentIds: {
      baseName: "incident_ids",
      type: "Array<number>",
      required: true,
      format: "int64",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SecurityMonitoringSignalIncidentsUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
