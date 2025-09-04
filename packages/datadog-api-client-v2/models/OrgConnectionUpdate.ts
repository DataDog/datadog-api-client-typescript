/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgConnectionType } from "./OrgConnectionType";
import { OrgConnectionUpdateAttributes } from "./OrgConnectionUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Org connection update data.
 */
export class OrgConnectionUpdate {
  /**
   * Attributes for updating an org connection.
   */
  "attributes": OrgConnectionUpdateAttributes;
  /**
   * The unique identifier of the org connection.
   */
  "id": string;
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
      type: "OrgConnectionUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
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
    return OrgConnectionUpdate.attributeTypeMap;
  }

  public constructor() {}
}
