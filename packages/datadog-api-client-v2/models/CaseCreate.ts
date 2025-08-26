/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseCreateAttributes } from "./CaseCreateAttributes";
import { CaseCreateRelationships } from "./CaseCreateRelationships";
import { CaseResourceType } from "./CaseResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case creation data
 */
export class CaseCreate {
  /**
   * Case creation attributes
   */
  "attributes": CaseCreateAttributes;
  /**
   * Relationships formed with the case on creation
   */
  "relationships"?: CaseCreateRelationships;
  /**
   * Case resource type
   */
  "type": CaseResourceType;

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
      type: "CaseCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "CaseCreateRelationships",
    },
    type: {
      baseName: "type",
      type: "CaseResourceType",
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
    return CaseCreate.attributeTypeMap;
  }

  public constructor() {}
}
