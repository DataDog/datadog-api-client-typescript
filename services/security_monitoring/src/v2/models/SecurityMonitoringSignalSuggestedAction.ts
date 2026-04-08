import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityMonitoringSignalSuggestedActionAttributes } from "./SecurityMonitoringSignalSuggestedActionAttributes";
import { SecurityMonitoringSignalSuggestedActionType } from "./SecurityMonitoringSignalSuggestedActionType";

/**
 * A suggested action for a security signal.
 */
export class SecurityMonitoringSignalSuggestedAction {
  /**
   * Attributes of a suggested action for a security signal. The available fields depend on the action type.
   */
  "attributes": SecurityMonitoringSignalSuggestedActionAttributes;
  /**
   * The unique ID of the suggested action.
   */
  "id": string;
  /**
   * The type of the suggested action resource.
   */
  "type": SecurityMonitoringSignalSuggestedActionType;
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
      type: "SecurityMonitoringSignalSuggestedActionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityMonitoringSignalSuggestedActionType",
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
    return SecurityMonitoringSignalSuggestedAction.attributeTypeMap;
  }

  public constructor() {}
}
