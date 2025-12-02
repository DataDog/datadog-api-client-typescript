/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseDataType } from "./CaseDataType";
import { DetachCaseRequestDataRelationships } from "./DetachCaseRequestDataRelationships";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for detaching security findings from their case.
 */
export class DetachCaseRequestData {
  /**
   * The unique identifier of the detachment request.
   */
  "id"?: string;
  /**
   * Relationships detaching security findings from their case.
   */
  "relationships"?: DetachCaseRequestDataRelationships;
  /**
   * Cases resource type.
   */
  "type": CaseDataType;

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
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "DetachCaseRequestDataRelationships",
    },
    type: {
      baseName: "type",
      type: "CaseDataType",
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
    return DetachCaseRequestData.attributeTypeMap;
  }

  public constructor() {}
}
