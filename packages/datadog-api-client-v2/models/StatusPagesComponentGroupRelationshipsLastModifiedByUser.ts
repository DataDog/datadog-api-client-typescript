/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StatusPagesComponentGroupRelationshipsLastModifiedByUserData } from "./StatusPagesComponentGroupRelationshipsLastModifiedByUserData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The Datadog user who last modified the component group.
 */
export class StatusPagesComponentGroupRelationshipsLastModifiedByUser {
  "data": StatusPagesComponentGroupRelationshipsLastModifiedByUserData;

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
    data: {
      baseName: "data",
      type: "StatusPagesComponentGroupRelationshipsLastModifiedByUserData",
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
    return StatusPagesComponentGroupRelationshipsLastModifiedByUser.attributeTypeMap;
  }

  public constructor() {}
}
