/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MaintenanceUpdateDataRelationshipsUserData } from "./MaintenanceUpdateDataRelationshipsUserData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A user relationship of a maintenance update.
 */
export class MaintenanceUpdateDataRelationshipsUser {
  /**
   * The data object identifying a Datadog user linked to a maintenance update.
   */
  "data": MaintenanceUpdateDataRelationshipsUserData;

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
      type: "MaintenanceUpdateDataRelationshipsUserData",
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
    return MaintenanceUpdateDataRelationshipsUser.attributeTypeMap;
  }

  public constructor() {}
}
