/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentJiraIssueDataAttributesRequest } from "./IncidentJiraIssueDataAttributesRequest";
import { IncidentJiraIssueType } from "./IncidentJiraIssueType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Jira issue data for a request.
 */
export class IncidentJiraIssueDataRequest {
  /**
   * Attributes for creating a Jira issue from an incident.
   */
  "attributes": IncidentJiraIssueDataAttributesRequest;
  /**
   * Incident Jira issue resource type.
   */
  "type": IncidentJiraIssueType;

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
      type: "IncidentJiraIssueDataAttributesRequest",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentJiraIssueType",
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
    return IncidentJiraIssueDataRequest.attributeTypeMap;
  }

  public constructor() {}
}
