/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GovernanceConfigAttributes } from "./GovernanceConfigAttributes";
import { GovernanceConsoleConfigResourceType } from "./GovernanceConsoleConfigResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Governance Console configuration resource.
 */
export class GovernanceConfigData {
  /**
   * The attributes of a Governance Console configuration.
   */
  "attributes": GovernanceConfigAttributes;
  /**
   * The unique identifier of the organization the Governance Console configuration applies to.
   */
  "id": string;
  /**
   * Governance console config resource type.
   */
  "type": GovernanceConsoleConfigResourceType;

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
      type: "GovernanceConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GovernanceConsoleConfigResourceType",
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
    return GovernanceConfigData.attributeTypeMap;
  }

  public constructor() {}
}
