/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `OutboundEdge` object.
 */
export class OutboundEdge {
  /**
   * The `OutboundEdge` `branchName`.
   */
  "branchName": string;
  /**
   * The `OutboundEdge` `nextStepName`.
   */
  "nextStepName": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    branchName: {
      baseName: "branchName",
      type: "string",
      required: true,
    },
    nextStepName: {
      baseName: "nextStepName",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OutboundEdge.attributeTypeMap;
  }

  public constructor() {}
}
