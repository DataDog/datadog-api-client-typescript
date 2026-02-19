/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeRequestDecisionsRelationship } from "./ChangeRequestDecisionsRelationship";
import { ChangeRequestUserRelationship } from "./ChangeRequestUserRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Relationships of a change request.
 */
export class ChangeRequestRelationships {
  /**
   * Relationship to change request decisions.
   */
  "changeRequestDecisions": ChangeRequestDecisionsRelationship;
  /**
   * Relationship to a user.
   */
  "createdBy": ChangeRequestUserRelationship;
  /**
   * Relationship to a user.
   */
  "modifiedBy": ChangeRequestUserRelationship;

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
    changeRequestDecisions: {
      baseName: "change_request_decisions",
      type: "ChangeRequestDecisionsRelationship",
      required: true,
    },
    createdBy: {
      baseName: "created_by",
      type: "ChangeRequestUserRelationship",
      required: true,
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "ChangeRequestUserRelationship",
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
    return ChangeRequestRelationships.attributeTypeMap;
  }

  public constructor() {}
}
