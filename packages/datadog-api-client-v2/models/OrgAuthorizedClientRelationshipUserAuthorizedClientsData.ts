/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgAuthorizedClientRelationshipUserAuthorizedClientsDataType } from "./OrgAuthorizedClientRelationshipUserAuthorizedClientsDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data identifying a user authorized client.
 */
export class OrgAuthorizedClientRelationshipUserAuthorizedClientsData {
  /**
   * The ID of the user authorized client.
   */
  "id": string;
  /**
   * User authorized client resource type.
   */
  "type": OrgAuthorizedClientRelationshipUserAuthorizedClientsDataType;

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
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgAuthorizedClientRelationshipUserAuthorizedClientsDataType",
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
    return OrgAuthorizedClientRelationshipUserAuthorizedClientsData.attributeTypeMap;
  }

  public constructor() {}
}
