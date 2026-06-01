/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentPageRoleReference } from "./IncidentPageRoleReference";
import { IncidentPageTarget } from "./IncidentPageTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating an on-call page from an incident.
 */
export class IncidentCreateOnCallPageDataAttributesRequest {
  /**
   * The description of the page.
   */
  "description"?: string;
  /**
   * A reference to an incident role for a page.
   */
  "role"?: IncidentPageRoleReference;
  /**
   * List of affected services.
   */
  "services"?: Array<string>;
  /**
   * List of tags for the page.
   */
  "tags"?: Array<string>;
  /**
   * The target recipient for a page.
   */
  "target"?: IncidentPageTarget;
  /**
   * The title of the page.
   */
  "title"?: string;

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
    description: {
      baseName: "description",
      type: "string",
    },
    role: {
      baseName: "role",
      type: "IncidentPageRoleReference",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    target: {
      baseName: "target",
      type: "IncidentPageTarget",
    },
    title: {
      baseName: "title",
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
    return IncidentCreateOnCallPageDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
