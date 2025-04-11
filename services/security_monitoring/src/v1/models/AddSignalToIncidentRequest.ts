import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes describing which incident to add the signal to.
 */
export class AddSignalToIncidentRequest {
  /**
   * Whether to post the signal on the incident timeline.
   */
  "addToSignalTimeline"?: boolean;
  /**
   * Public ID attribute of the incident to which the signal will be added.
   */
  "incidentId": number;
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
    addToSignalTimeline: {
      baseName: "add_to_signal_timeline",
      type: "boolean",
    },
    incidentId: {
      baseName: "incident_id",
      type: "number",
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
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AddSignalToIncidentRequest.attributeTypeMap;
  }

  public constructor() {}
}
