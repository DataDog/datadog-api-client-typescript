import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the investigation to start.
 */
export class SecurityAgentInvestigationCreateAttributes {
  /**
   * Start a new investigation even if the signal already has one. If the signal's investigation is still
   * running, the response has that investigation instead. A rerun counts toward the monthly investigation
   * limit like any investigation.
   */
  "rerun"?: boolean;
  /**
   * ID of the signal to investigate, in its V1 form, which starts with `AQ`, or in its longer V3 form, which
   * starts with `Aw`. Investigations carry the V1 form, so their `signal_id` can differ from the ID you pass.
   */
  "signalId": string;
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
    rerun: {
      baseName: "rerun",
      type: "boolean",
    },
    signalId: {
      baseName: "signal_id",
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
    return SecurityAgentInvestigationCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
