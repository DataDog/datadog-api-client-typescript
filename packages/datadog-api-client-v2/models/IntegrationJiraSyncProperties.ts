/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IntegrationJiraSyncDueDate } from "./IntegrationJiraSyncDueDate";
import { IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties } from "./IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties";
import { SyncProperty } from "./SyncProperty";
import { SyncPropertyWithMapping } from "./SyncPropertyWithMapping";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class IntegrationJiraSyncProperties {
  /**
   * Sync property configuration
   */
  "assignee"?: SyncProperty;
  /**
   * Sync property configuration
   */
  "comments"?: SyncProperty;
  "customFields"?: {
    [
      key: string
    ]: IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties;
  };
  /**
   * Sync property configuration
   */
  "description"?: SyncProperty;
  "dueDate"?: IntegrationJiraSyncDueDate;
  /**
   * Sync property with mapping configuration
   */
  "priority"?: SyncPropertyWithMapping;
  /**
   * Sync property with mapping configuration
   */
  "status"?: SyncPropertyWithMapping;
  /**
   * Sync property configuration
   */
  "title"?: SyncProperty;

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
    assignee: {
      baseName: "assignee",
      type: "SyncProperty",
    },
    comments: {
      baseName: "comments",
      type: "SyncProperty",
    },
    customFields: {
      baseName: "custom_fields",
      type: "{ [key: string]: IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties; }",
    },
    description: {
      baseName: "description",
      type: "SyncProperty",
    },
    dueDate: {
      baseName: "due_date",
      type: "IntegrationJiraSyncDueDate",
    },
    priority: {
      baseName: "priority",
      type: "SyncPropertyWithMapping",
    },
    status: {
      baseName: "status",
      type: "SyncPropertyWithMapping",
    },
    title: {
      baseName: "title",
      type: "SyncProperty",
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
    return IntegrationJiraSyncProperties.attributeTypeMap;
  }

  public constructor() {}
}
