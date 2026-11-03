/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the RUM configuration.
 */
export class RumConfigAttributes {
  /**
   * Whether the RUM configuration is disabled for the organization.
   */
  "disabled"?: boolean;
  /**
   * Whether application tags are enforced for the RUM applications in the organization.
   */
  "enforcedApplicationTags": boolean;
  /**
   * Timestamp of when the enforced application tags setting was last updated.
   */
  "enforcedApplicationTagsUpdatedAt"?: Date;
  /**
   * Handle of the user who last updated the enforced application tags setting.
   */
  "enforcedApplicationTagsUpdatedBy"?: string;
  /**
   * Version of the out-of-the-box metrics installed for the organization.
   */
  "ootbMetricsVersion"?: number;
  /**
   * Timestamp of when the out-of-the-box metrics version was installed.
   */
  "ootbMetricsVersionInstalledAt"?: Date;
  /**
   * Whether retention filters are enabled for the organization.
   */
  "retentionFiltersEnabled": boolean;
  /**
   * Timestamp of when the retention filters setting was last updated.
   */
  "retentionFiltersEnabledUpdatedAt"?: Date;
  /**
   * Handle of the user or job who last updated the retention filters setting.
   */
  "retentionFiltersEnabledUpdatedBy"?: string;

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
    disabled: {
      baseName: "disabled",
      type: "boolean",
    },
    enforcedApplicationTags: {
      baseName: "enforced_application_tags",
      type: "boolean",
      required: true,
    },
    enforcedApplicationTagsUpdatedAt: {
      baseName: "enforced_application_tags_updated_at",
      type: "Date",
      format: "date-time",
    },
    enforcedApplicationTagsUpdatedBy: {
      baseName: "enforced_application_tags_updated_by",
      type: "string",
    },
    ootbMetricsVersion: {
      baseName: "ootb_metrics_version",
      type: "number",
      format: "int64",
    },
    ootbMetricsVersionInstalledAt: {
      baseName: "ootb_metrics_version_installed_at",
      type: "Date",
      format: "date-time",
    },
    retentionFiltersEnabled: {
      baseName: "retention_filters_enabled",
      type: "boolean",
      required: true,
    },
    retentionFiltersEnabledUpdatedAt: {
      baseName: "retention_filters_enabled_updated_at",
      type: "Date",
      format: "date-time",
    },
    retentionFiltersEnabledUpdatedBy: {
      baseName: "retention_filters_enabled_updated_by",
      type: "string",
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
    return RumConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
