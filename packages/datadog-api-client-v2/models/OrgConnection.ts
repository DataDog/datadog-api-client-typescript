/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgConnectionAttributes } from "./OrgConnectionAttributes";
import { OrgConnectionRelationships } from "./OrgConnectionRelationships";
import { OrgConnectionType } from "./OrgConnectionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An org connection.
 */
export class OrgConnection {
  /**
   * Org connection attributes.
   */
  "attributes": OrgConnectionAttributes;
  /**
   * The unique identifier of the org connection.
   */
  "id": string;
  /**
   * Related organizations and user.
   */
  "relationships": OrgConnectionRelationships;
  /**
   * Org connection type.
   */
  "type": OrgConnectionType;

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
      type: "OrgConnectionAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "OrgConnectionRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgConnectionType",
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
    return OrgConnection.attributeTypeMap;
  }

  public constructor() {}
}
