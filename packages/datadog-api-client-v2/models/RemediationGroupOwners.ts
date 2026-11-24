/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RemediationGroupOwnerList } from "./RemediationGroupOwnerList";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Who should fix the group: the code owners of the group's findings, from their `@git.codeowners` attribute,
 * and their Datadog teams, from their `team` tag. A group with no owners has empty `items` and a `total` of 0.
 */
export class RemediationGroupOwners {
  /**
   * Owners of the group's open findings. `items` lists at most 5 owners, the owners of the most findings first,
   * then by name. `total` counts every distinct owner, so the list is cut when `total` is larger than the number
   * of items.
   */
  "codeowners": RemediationGroupOwnerList;
  /**
   * Owners of the group's open findings. `items` lists at most 5 owners, the owners of the most findings first,
   * then by name. `total` counts every distinct owner, so the list is cut when `total` is larger than the number
   * of items.
   */
  "teams": RemediationGroupOwnerList;

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
    codeowners: {
      baseName: "codeowners",
      type: "RemediationGroupOwnerList",
      required: true,
    },
    teams: {
      baseName: "teams",
      type: "RemediationGroupOwnerList",
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
    return RemediationGroupOwners.attributeTypeMap;
  }

  public constructor() {}
}
