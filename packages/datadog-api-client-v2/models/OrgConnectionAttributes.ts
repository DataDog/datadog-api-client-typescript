/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgConnectionTypeEnum } from "./OrgConnectionTypeEnum";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Org connection attributes.
 */
export class OrgConnectionAttributes {
  /**
   * List of connection types.
   */
  "connectionTypes": Array<OrgConnectionTypeEnum>;
  /**
   * Timestamp when the connection was created.
   */
  "createdAt": Date;

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
    connectionTypes: {
      baseName: "connection_types",
      type: "Array<OrgConnectionTypeEnum>",
      required: true,
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return OrgConnectionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
