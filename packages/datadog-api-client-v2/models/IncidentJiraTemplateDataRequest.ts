/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentJiraTemplateDataAttributesRequest } from "./IncidentJiraTemplateDataAttributesRequest";
import { IncidentJiraTemplateRelationships } from "./IncidentJiraTemplateRelationships";
import { IncidentJiraTemplateType } from "./IncidentJiraTemplateType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident Jira template data for a create or update request.
 */
export class IncidentJiraTemplateDataRequest {
  /**
   * Attributes for creating or updating an incident Jira template.
   */
  "attributes": IncidentJiraTemplateDataAttributesRequest;
  /**
   * Relationships for an incident Jira template.
   */
  "relationships"?: IncidentJiraTemplateRelationships;
  /**
   * Incident Jira template resource type.
   */
  "type": IncidentJiraTemplateType;

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
      type: "IncidentJiraTemplateDataAttributesRequest",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentJiraTemplateRelationships",
    },
    type: {
      baseName: "type",
      type: "IncidentJiraTemplateType",
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
    return IncidentJiraTemplateDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
