import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MicrosoftTeamsConfigurationReferenceData } from "./MicrosoftTeamsConfigurationReferenceData";

/**
 * A reference to a Microsoft Teams Configuration resource.
 */
export class MicrosoftTeamsConfigurationReference {
  /**
   * The Microsoft Teams configuration relationship data object.
   */
  "data": MicrosoftTeamsConfigurationReferenceData | null;
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
    data: {
      baseName: "data",
      type: "MicrosoftTeamsConfigurationReferenceData",
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
    return MicrosoftTeamsConfigurationReference.attributeTypeMap;
  }

  public constructor() {}
}
