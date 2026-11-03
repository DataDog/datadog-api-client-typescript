/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestResultRumContext } from "./SyntheticsTestResultRumContext";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Information about a sub-test played from a parent browser test.
 */
export class SyntheticsTestResultSubTest {
  /**
   * Identifier of the sub-test.
   */
  "id"?: string;
  /**
   * Index of the browser tab playing the sub-test.
   */
  "playingTab"?: number;
  /**
   * RUM application context associated with a step or sub-test.
   */
  "rumContext"?: SyntheticsTestResultRumContext;

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
    id: {
      baseName: "id",
      type: "string",
    },
    playingTab: {
      baseName: "playing_tab",
      type: "number",
      format: "int64",
    },
    rumContext: {
      baseName: "rum_context",
      type: "SyntheticsTestResultRumContext",
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
    return SyntheticsTestResultSubTest.attributeTypeMap;
  }

  public constructor() {}
}
