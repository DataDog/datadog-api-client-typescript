import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecureEmbedGlobalTime } from "./SecureEmbedGlobalTime";
import { SecureEmbedSelectableTemplateVariable } from "./SecureEmbedSelectableTemplateVariable";
import { SecureEmbedShareType } from "./SecureEmbedShareType";
import { SecureEmbedStatus } from "./SecureEmbedStatus";
import { SecureEmbedViewingPreferences } from "./SecureEmbedViewingPreferences";

/**
 * Attributes of an updated secure embed shared dashboard.
 */
export class SecureEmbedUpdateResponseAttributes {
  /**
   * Creation timestamp.
   */
  "createdAt"?: string;
  /**
   * Last 4 characters of the credential. Defaults to `0000` if unavailable.
   */
  "credentialSuffix"?: string;
  /**
   * The source dashboard ID.
   */
  "dashboardId"?: string;
  /**
   * Default time range configuration for the secure embed.
   */
  "globalTime"?: SecureEmbedGlobalTime;
  /**
   * Whether time range is viewer-selectable.
   */
  "globalTimeSelectable"?: boolean;
  /**
   * Internal share ID.
   */
  "id"?: string;
  /**
   * Template variables with their configuration.
   */
  "selectableTemplateVars"?: Array<SecureEmbedSelectableTemplateVariable>;
  /**
   * The type of share. Always `secure_embed`.
   */
  "shareType"?: SecureEmbedShareType;
  /**
   * The status of the secure embed share. Active means the shared dashboard is available. Paused means it is not.
   */
  "status"?: SecureEmbedStatus;
  /**
   * Display title.
   */
  "title"?: string;
  /**
   * Public share token.
   */
  "token"?: string;
  /**
   * CDN URL for the shared dashboard.
   */
  "url"?: string;
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
    createdAt: {
      baseName: "created_at",
      type: "string",
    },
    credentialSuffix: {
      baseName: "credential_suffix",
      type: "string",
    },
    dashboardId: {
      baseName: "dashboard_id",
      type: "string",
    },
    globalTime: {
      baseName: "global_time",
      type: "SecureEmbedGlobalTime",
    },
    globalTimeSelectable: {
      baseName: "global_time_selectable",
      type: "boolean",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    selectableTemplateVars: {
      baseName: "selectable_template_vars",
      type: "Array<SecureEmbedSelectableTemplateVariable>",
    },
    shareType: {
      baseName: "share_type",
      type: "SecureEmbedShareType",
    },
    status: {
      baseName: "status",
      type: "SecureEmbedStatus",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    token: {
      baseName: "token",
      type: "string",
    },
    url: {
      baseName: "url",
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
    return SecureEmbedUpdateResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
