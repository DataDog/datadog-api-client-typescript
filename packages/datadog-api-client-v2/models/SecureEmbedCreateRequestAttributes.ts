/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecureEmbedGlobalTime } from "./SecureEmbedGlobalTime";
import { SecureEmbedSelectableTemplateVariable } from "./SecureEmbedSelectableTemplateVariable";
import { SecureEmbedStatus } from "./SecureEmbedStatus";
import { SecureEmbedViewingPreferences } from "./SecureEmbedViewingPreferences";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a secure embed shared dashboard.
 */
export class SecureEmbedCreateRequestAttributes {
  /**
   * Default time range configuration for the secure embed.
   */
  "globalTime": SecureEmbedGlobalTime;
  /**
   * Whether viewers can change the time range.
   */
  "globalTimeSelectable": boolean;
  /**
   * Template variables viewers can modify.
   */
  "selectableTemplateVars": Array<SecureEmbedSelectableTemplateVariable>;
  /**
   * The status of the secure embed share. Active means the shared dashboard is available. Paused means it is not.
   */
  "status": SecureEmbedStatus;
  /**
   * Display title for the shared dashboard.
   */
  "title": string;
  /**
   * Display settings for the secure embed shared dashboard.
   */
  "viewingPreferences": SecureEmbedViewingPreferences;

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
      required: true,
    },
    globalTimeSelectable: {
      baseName: "global_time_selectable",
      type: "boolean",
      required: true,
    },
    selectableTemplateVars: {
      baseName: "selectable_template_vars",
      type: "Array<SecureEmbedSelectableTemplateVariable>",
      required: true,
    },
    status: {
      baseName: "status",
      type: "SecureEmbedStatus",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    viewingPreferences: {
      baseName: "viewing_preferences",
      type: "SecureEmbedViewingPreferences",
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
    return SecureEmbedCreateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
