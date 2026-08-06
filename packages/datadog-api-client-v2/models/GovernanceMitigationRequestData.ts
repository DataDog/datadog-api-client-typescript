/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GovernanceControlDetectionResourceType } from "./GovernanceControlDetectionResourceType";
import { GovernanceMitigationRequestAttributes } from "./GovernanceMitigationRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data of a governance mitigation request.
 */
export class GovernanceMitigationRequestData {
  /**
   * The attributes of a governance mitigation request.
   */
  "attributes"?: GovernanceMitigationRequestAttributes;
  /**
   * Governance control detection resource type.
   */
  "type": GovernanceControlDetectionResourceType;

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
      type: "GovernanceMitigationRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "GovernanceControlDetectionResourceType",
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
    return GovernanceMitigationRequestData.attributeTypeMap;
  }

  public constructor() {}
}
