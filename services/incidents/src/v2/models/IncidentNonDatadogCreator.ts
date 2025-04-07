import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Incident's non Datadog creator.
 */
export class IncidentNonDatadogCreator {
  /**
   * Non Datadog creator `48px` image.
   */
  "image48Px"?: string;
  /**
   * Non Datadog creator name.
   */
  "name"?: string;
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
    image48Px: {
      baseName: "image_48_px",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return IncidentNonDatadogCreator.attributeTypeMap;
  }

  public constructor() {}
}
