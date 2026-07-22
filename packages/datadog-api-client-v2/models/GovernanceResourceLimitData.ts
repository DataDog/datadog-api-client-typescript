/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GovernanceResourceLimitAttributes } from "./GovernanceResourceLimitAttributes";
import { GovernanceResourceLimitResourceType } from "./GovernanceResourceLimitResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A governance resource limit resource.
 */
export class GovernanceResourceLimitData {
  /**
   * The attributes of a governance resource limit.
   */
  "attributes": GovernanceResourceLimitAttributes;
  /**
   * The unique identifier of the resource limit.
   */
  "id": string;
  /**
   * Resource limit resource type.
   */
  "type": GovernanceResourceLimitResourceType;

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
      type: "GovernanceResourceLimitAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GovernanceResourceLimitResourceType",
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
    return GovernanceResourceLimitData.attributeTypeMap;
  }

  public constructor() {}
}
