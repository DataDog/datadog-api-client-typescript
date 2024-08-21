/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardShareType } from "./DashboardShareType";
import { SelectableTemplateVariableItems } from "./SelectableTemplateVariableItems";
import { SharedDashboardUpdateRequestGlobalTime } from "./SharedDashboardUpdateRequestGlobalTime";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Update a shared dashboard's settings.
 */
export class SharedDashboardUpdateRequest {
  /**
   * Timeframe setting for the shared dashboard.
   */
  "globalTime": SharedDashboardUpdateRequestGlobalTime | null;
  /**
   * Whether to allow viewers to select a different global time setting for the shared dashboard.
   */
  "globalTimeSelectableEnabled"?: boolean;
  /**
   * List of objects representing template variables on the shared dashboard which can have selectable values.
   */
  "selectableTemplateVars"?: Array<SelectableTemplateVariableItems>;
  /**
   * List of email addresses that can be given access to the shared dashboard.
   */
  "shareList"?: Array<string>;
  /**
   * Type of sharing access (either open to anyone who has the public URL or invite-only).
   */
  "shareType"?: DashboardShareType;

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
      type: "SharedDashboardUpdateRequestGlobalTime",
      required: true,
    },
    globalTimeSelectableEnabled: {
      baseName: "global_time_selectable_enabled",
      type: "boolean",
    },
    selectableTemplateVars: {
      baseName: "selectable_template_vars",
      type: "Array<SelectableTemplateVariableItems>",
    },
    shareList: {
      baseName: "share_list",
      type: "Array<string>",
    },
    shareType: {
      baseName: "share_type",
      type: "DashboardShareType",
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
    return SharedDashboardUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
