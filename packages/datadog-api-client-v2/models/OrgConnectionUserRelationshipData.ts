/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgConnectionUserRelationshipDataType } from "./OrgConnectionUserRelationshipDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data for a user relationship.
 */
export class OrgConnectionUserRelationshipData {
  /**
   * User UUID.
   */
  "id"?: string;
  /**
   * User name.
   */
  "name"?: string;
  /**
   * The type of the user relationship.
   */
  "type"?: OrgConnectionUserRelationshipDataType;

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
    name: {
      baseName: "name",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "OrgConnectionUserRelationshipDataType",
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
    return OrgConnectionUserRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
