/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentUserDefinedRolePolicy } from "./IncidentUserDefinedRolePolicy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating an incident user-defined role.
 */
export class IncidentUserDefinedRoleDataAttributesRequest {
  /**
   * A description of the user-defined role.
   */
  "description"?: string;
  /**
   * The name of the user-defined role.
   */
  "name": string;
  /**
   * Policy configuration for a user-defined role.
   */
  "policy": IncidentUserDefinedRolePolicy;

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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    policy: {
      baseName: "policy",
      type: "IncidentUserDefinedRolePolicy",
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
    return IncidentUserDefinedRoleDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
