/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CommitmentsUnit } from "./CommitmentsUnit";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Metadata for a commitments list response.
 */
export class CommitmentsListMeta {
  /**
   * Unit metadata for a numeric metric.
   */
  "committedSpendUnit"?: CommitmentsUnit;

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
    committedSpendUnit: {
      baseName: "committed_spend_unit",
      type: "CommitmentsUnit",
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
    return CommitmentsListMeta.attributeTypeMap;
  }

  public constructor() {}
}
