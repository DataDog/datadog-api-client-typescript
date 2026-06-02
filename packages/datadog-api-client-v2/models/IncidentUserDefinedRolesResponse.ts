/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentUserDefinedRoleDataResponse } from "./IncidentUserDefinedRoleDataResponse";
import { IncidentUserDefinedRoleIncludedItem } from "./IncidentUserDefinedRoleIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with a list of incident user-defined roles.
 */
export class IncidentUserDefinedRolesResponse {
  /**
   * List of incident user-defined role data objects.
   */
  "data": Array<IncidentUserDefinedRoleDataResponse>;
  /**
   * Included resources for an incident user-defined role response.
   */
  "included"?: Array<IncidentUserDefinedRoleIncludedItem>;

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
      type: "Array<IncidentUserDefinedRoleDataResponse>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentUserDefinedRoleIncludedItem>",
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
    return IncidentUserDefinedRolesResponse.attributeTypeMap;
  }

  public constructor() {}
}
