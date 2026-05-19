/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CaseCountGroupValue } from "./CaseCountGroupValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A facet group containing counts broken down by the distinct values of a case field (for example, status or priority).
 */
export class CaseCountGroup {
  /**
   * The name of the field being grouped on (for example, `status` or `priority`).
   */
  "group": string;
  /**
   * Values within this group.
   */
  "groupValues": Array<CaseCountGroupValue>;

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
    group: {
      baseName: "group",
      type: "string",
      required: true,
    },
    groupValues: {
      baseName: "group_values",
      type: "Array<CaseCountGroupValue>",
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
    return CaseCountGroup.attributeTypeMap;
  }

  public constructor() {}
}
