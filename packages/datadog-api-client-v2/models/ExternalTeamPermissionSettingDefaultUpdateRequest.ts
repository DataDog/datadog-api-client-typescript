/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExternalTeamPermissionSettingDefaultUpdateData } from "./ExternalTeamPermissionSettingDefaultUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for upserting an external team permission setting default.
 */
export class ExternalTeamPermissionSettingDefaultUpdateRequest {
  /**
   * Data for upserting an external team permission setting default.
   */
  "data": ExternalTeamPermissionSettingDefaultUpdateData;

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
      type: "ExternalTeamPermissionSettingDefaultUpdateData",
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
    return ExternalTeamPermissionSettingDefaultUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
