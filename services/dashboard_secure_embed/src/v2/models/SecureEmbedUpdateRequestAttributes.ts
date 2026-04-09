import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedGlobalTime } from "./SecureEmbedGlobalTime";
import { SecureEmbedSelectableTemplateVariable } from "./SecureEmbedSelectableTemplateVariable";
import { SecureEmbedStatus } from "./SecureEmbedStatus";
import { SecureEmbedViewingPreferences } from "./SecureEmbedViewingPreferences";

/**
 * Attributes for updating a secure embed shared dashboard. All fields are optional.
 */
export class SecureEmbedUpdateRequestAttributes {
  /**
   * Default time range configuration for the secure embed.
   */
  "globalTime"?: SecureEmbedGlobalTime;
  /**
   * Updated time selectability.
   */
  "globalTimeSelectable"?: boolean;
  /**
   * Updated template variables.
   */
  "selectableTemplateVars"?: Array<SecureEmbedSelectableTemplateVariable>;
  /**
   * The status of the secure embed share. Active means the shared dashboard is available. Paused means it is not.
   */
  "status"?: SecureEmbedStatus;
  /**
   * Updated title.
   */
  "title"?: string;
  /**
   * Display settings for the secure embed shared dashboard.
   */
  "viewingPreferences"?: SecureEmbedViewingPreferences;
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
    globalTime: {
      baseName: "global_time",
      type: "SecureEmbedGlobalTime",
    },
    globalTimeSelectable: {
      baseName: "global_time_selectable",
      type: "boolean",
    },
    selectableTemplateVars: {
      baseName: "selectable_template_vars",
      type: "Array<SecureEmbedSelectableTemplateVariable>",
    },
    status: {
      baseName: "status",
      type: "SecureEmbedStatus",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    viewingPreferences: {
      baseName: "viewing_preferences",
      type: "SecureEmbedViewingPreferences",
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
    return SecureEmbedUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
