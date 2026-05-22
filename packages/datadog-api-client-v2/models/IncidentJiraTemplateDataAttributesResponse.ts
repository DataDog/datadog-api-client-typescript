/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentJiraTemplateFieldConfiguration } from "./IncidentJiraTemplateFieldConfiguration";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an incident Jira template.
 */
export class IncidentJiraTemplateDataAttributesResponse {
  /**
   * The Jira account identifier.
   */
  "accountId": string;
  /**
   * Timestamp when the template was created.
   */
  "created": Date;
  /**
   * UUID of the user who created the template.
   */
  "createdByUuid": string;
  /**
   * Field configuration mappings.
   */
  "fieldConfigurations"?: Array<IncidentJiraTemplateFieldConfiguration>;
  /**
   * The Jira fields configuration.
   */
  "fields"?: { [key: string]: any };
  /**
   * Whether this is the default template.
   */
  "isDefault": boolean;
  /**
   * The Jira issue type identifier.
   */
  "issueId": string;
  /**
   * UUID of the user who last modified the template.
   */
  "lastModifiedByUuid": string;
  /**
   * The field mappings configuration.
   */
  "mappings"?: { [key: string]: any };
  /**
   * Additional metadata for the template.
   */
  "meta"?: { [key: string]: any };
  /**
   * Timestamp when the template was last modified.
   */
  "modified": Date;
  /**
   * The name of the template.
   */
  "name": string;
  /**
   * The Jira project identifier.
   */
  "projectId": string;
  /**
   * The Jira project key.
   */
  "projectKey": string;
  /**
   * Whether synchronization is enabled.
   */
  "syncEnabled": boolean;
  /**
   * The type of the template.
   */
  "type": string;

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
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    created: {
      baseName: "created",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdByUuid: {
      baseName: "created_by_uuid",
      type: "string",
      required: true,
      format: "uuid",
    },
    fieldConfigurations: {
      baseName: "field_configurations",
      type: "Array<IncidentJiraTemplateFieldConfiguration>",
    },
    fields: {
      baseName: "fields",
      type: "{ [key: string]: any; }",
    },
    isDefault: {
      baseName: "is_default",
      type: "boolean",
      required: true,
    },
    issueId: {
      baseName: "issue_id",
      type: "string",
      required: true,
    },
    lastModifiedByUuid: {
      baseName: "last_modified_by_uuid",
      type: "string",
      required: true,
      format: "uuid",
    },
    mappings: {
      baseName: "mappings",
      type: "{ [key: string]: any; }",
    },
    meta: {
      baseName: "meta",
      type: "{ [key: string]: any; }",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      required: true,
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    projectId: {
      baseName: "project_id",
      type: "string",
      required: true,
    },
    projectKey: {
      baseName: "project_key",
      type: "string",
      required: true,
    },
    syncEnabled: {
      baseName: "sync_enabled",
      type: "boolean",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return IncidentJiraTemplateDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
