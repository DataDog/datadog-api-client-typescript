import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GlobalIncidentSettingsAttributesRequest } from "./GlobalIncidentSettingsAttributesRequest";
import { GlobalIncidentSettingsType } from "./GlobalIncidentSettingsType";

export class GlobalIncidentSettingsDataRequest {
  /**
   * Global incident settings attributes
   */
  "attributes"?: GlobalIncidentSettingsAttributesRequest;
  /**
   * Global incident settings resource type
   */
  "type": GlobalIncidentSettingsType;
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
    attributes: {
      baseName: "attributes",
      type: "GlobalIncidentSettingsAttributesRequest",
    },
    type: {
      baseName: "type",
      type: "GlobalIncidentSettingsType",
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
    return GlobalIncidentSettingsDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
